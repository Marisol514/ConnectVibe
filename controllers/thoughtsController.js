const { Thought, User } = require('../models');

const thoughtsController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({ path: 'reactions', select: '-__v' })
      .select('-__v')
      .sort({ createdAt: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Get one thought by id
  getThoughtById(req, res) {
    Thought.findById(req.params.id)
      .populate({ path: 'reactions', select: '-__v' })
      .select('-__v')
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(dbThoughtData => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json({ message: 'Thought successfully created!' });
      })
      .catch(err => res.status(400).json(err));
  },

  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        return User.findOneAndUpdate(
          { _id: dbThoughtData.userId },
          { $pull: { thoughts: req.params.id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        res.json({ message: 'Thought successfully deleted!' });
      })
      .catch(err => res.status(400).json(err));
  },

  // Add a reaction to a thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },

  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  }
};

module.exports = thoughtsController;

