const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtsController');

// Route to get all thoughts and post a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Route to get, update, or delete a specific thought by id
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Routes for reactions on a specific thought
router.route('/:thoughtId/reactions')
  .post(addReaction); // POST to add a reaction

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE to remove a reaction

module.exports = router;
