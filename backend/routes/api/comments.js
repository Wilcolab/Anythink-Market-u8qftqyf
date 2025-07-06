/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database, sorted by creation date (descending).
    *
    * @name GET /
    * @function
    * @memberof module:routes/api/comments
    * @async
    * @param {express.Request} req - Express request object.
    * @param {express.Response} res - Express response object.
    * @returns {Object[]} 200 - Array of comment objects.
    * @returns {Object} 500 - Internal server error message.
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    *
    * @name DELETE /:id
    * @function
    * @memberof module:routes/api/comments
    * @async
    * @param {express.Request} req - Express request object, with comment ID in params.
    * @param {express.Response} res - Express response object.
    * @returns {Object} 200 - Success message if comment deleted.
    * @returns {Object} 404 - Error message if comment not found.
    * @returns {Object} 500 - Internal server error message.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
