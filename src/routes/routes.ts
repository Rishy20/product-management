import * as express from "express";
import ProductController from "../controllers/ProductController";
import { multerMiddleWare } from "../middleware/multer";

export default function setRoutes(app: any) {
  const router = express();
  const productControl = new ProductController();

  app.use("/api", router);

  //Product Routes
  router.route("/products").post(multerMiddleWare({ type: "multiple", path: "products" }), productControl.createProduct);
  router.route("/products").get(productControl.getAllProducts);
  router.route("/products/:id").get(productControl.getProductById);
  router.route("/products/search/:name").get(productControl.getProductByName);
  router.route("/products/image/:name").get(productControl.getProductImage);
  router.route("/products/status").put(productControl.updateProductStatus);
  router.route("/products/:id").put(multerMiddleWare({ type: "multiple", path: "products" }), productControl.updateProduct);
  router.route("/products/:id").delete(productControl.deleteProduct);
}
