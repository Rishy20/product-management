import { IProduct } from "../interfaces/IProduct.js";
import { Logger } from "../loaders/logger.js";
import { IProductService } from "./interfaces/IProductService.js";
import { ProductDao } from "../dao/ProductDao.js";

export class ProductService implements IProductService {
  private logger = Logger.getInstance();
  public static instance: ProductService = null;
  private productDao = ProductDao.getInstance();

  public static getInstance(): ProductService {
    if (this.instance === null) {
      this.instance = new ProductService();
    }
    return this.instance;
  }

  public async createProduct(request: IProduct): Promise<IProduct> {
    this.logger.info("Product Services - createProduct()");
    return this.productDao
      .save(request)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }
  public async getAllProducts(): Promise<IProduct[]> {
    this.logger.info("Product Services - getAllProducts()");
    return this.productDao
      .getAll()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }
  public async getProductById(id: string): Promise<IProduct | Object> {
    this.logger.info("Product Services - getProductById()");
    return this.productDao
      .getById(id)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }
  public async getProductByName(name: string): Promise<IProduct | Object> {
    this.logger.info("Product Services - getProductByName()");
    return this.productDao
      .getByName(name)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }

  public async updateProduct(id: string, product: IProduct): Promise<IProduct | Object> {
    this.logger.info("Product Services - updateProduct()");
    return this.productDao
      .update(id, product)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }

  public async updateProductStatus(id: string, status: string): Promise<IProduct | Object> {
    this.logger.info("Product Services - updateProductStatus()");
    return this.productDao
      .updateStatus(id, status)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }

  public async deleteProduct(id: string): Promise<IProduct | Object> {
    this.logger.info("Product Services - deleteProduct()");
    return this.productDao
      .delete(id)
      .then((data: any) => {
        return data;
      })
      .catch((error) => {
        this.logger.error(error.message);
        throw error;
      });
  }
}
