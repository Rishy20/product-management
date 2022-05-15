import {IProduct} from "../../interfaces/IProduct.js";

export interface IProductService{
    createProduct(request:IProduct):Promise<IProduct>;
    getAllProducts():Promise<IProduct[]>;
    getProductById(id:string):Promise<IProduct | Object>;
    updateProduct(id:string,product:IProduct):Promise<IProduct | Object>;
    deleteProduct(id:string):Promise<IProduct | Object>;
    updateProductStatus(id:string,status:string):Promise<IProduct | Object>;
    getProductByName(name:string):Promise<IProduct | Object>;

}