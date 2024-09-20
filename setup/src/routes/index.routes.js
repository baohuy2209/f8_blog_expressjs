const postsRouter = require("./posts.routes");
const commentsRouter = require("./comments.routes");
const usersRouter = require("./user.routes");
const authRouter = require("./auth.router");
const productsRouter = require("./products.routes");

function routes(app) {
  app.use("/api/posts", postsRouter);
  app.use("/api/comments", commentsRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/products", productsRouter);
}
module.exports = routes;
