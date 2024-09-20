module.exports = {
  // get all comments
  // [GET] /
  index(req, res) {
    const comments = [
      {
        id: 1,
        comment: "Hello everyone",
      },
      {
        id: 2,
        comment: "Hello !",
      },
    ];
    res.json({
      data: comments,
    });
  },
  // Create a comment
  // [POST] /
  store(req, res) {
    res.json(["Create a comment"]);
  },
  show(req, res) {
    res.json(["A comment"]);
  },
  update(req, res) {
    res.json(["Update comment"]);
  },
  destroy(req, res) {
    res.json(["Delete comment"]);
  },
};
