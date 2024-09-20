const productsController = require("./controllers/products.controller");
const dbConnect = require("./lib/mongodb");
dbConnect(() => {
  productsController.syncFromKiotViet();
});
