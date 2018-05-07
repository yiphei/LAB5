import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.cover_url = req.body.cover_url;

  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const getPosts = (req, res) => {
  Post.find({}).then((results) => {
    res.json(results);
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const getPost = (req, res) => {
  Post.findById(req.params.id).then((result) => {
    res.json(result);
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const deletePost = (req, res) => {
  Post.remove({ _id: req.params.id }).then((result) => {
    res.json({ message: 'Post deleted!' });
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, res.body).then((result) => {
    res.json({ message: 'Post updated!' });
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
