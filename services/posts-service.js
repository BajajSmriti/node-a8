const postJson = require('../json/posts.json');

module.exports = (app) => {

    const findAllPosts = (req, res) => {
        res.json(postJson);
    }

    const createPost = (req, res) => {
        const newPost = req.body
        posts = [
            newPost,
            ...postJson
        ];
        res.json(posts);
    }

    const deletePost = (req, res) => {
        const id = req.params['id'];
        posts = postJson.filter(post => post.id !== id);
        res.sendStatus(200);
    }

    const likePost = (req, res) => {
        const id = req.params['id'];
        posts = postJson.map(post => {
            if (post.id === id) {
                if (post.liked === true) {
                    post.liked = false;
                    post.likes--;
                } else {
                    post.liked = true;
                    post.likes++;
                }
                return post;
            } else {
                return post;
            }
        });
        res.sendStatus(200);
    }

    app.put('/api/posts/:id/like', likePost);

    app.delete('/api/posts/:id', deletePost);

    app.post('/api/posts', createPost);

    app.get('/api/posts', findAllPosts);
};
