const posts = require('../db');

exports.index = (req, res) => {
    let html = '<ul>';
    posts.forEach(post => {
        html += `<li>${post.title}</li>`;
    });
    html += '</ul>';
    res.send(html);
};

exports.show = (req, res) => {
    const post = posts.find(p => p.slug === req.params.slug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
};
