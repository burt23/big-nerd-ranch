const Post = require("../models/post");

const addPost = async (req, res) => {
  try {
    const { query } = req;
    const post = new User(query);
    await post.save();
    res.status(201).json({ post });
  } catch (error) {
    console.error(error);
    const formattedError = `Unable to create new user\n 
      incoming query: ${JSON.stringify(req.query)} \n 
      error: ${JSON.stringify(error)}`;
    res.status(404).send(formattedError);
  }
};

const getPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findAll({
      where: {
        id: postId,
      },
    });
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    const formattedError = `Unable to get post\n 
      incoming postId: ${postId} \n 
      error: ${error}`;
    res.status(404).send(formattedError);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
    const formattedError = `Unable to select * posts\n 
      error: ${error}`;
    res.status(404).send(formattedError);
  }
};

module.exports = { addPost, getPost, getPosts };
