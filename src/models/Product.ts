import { IProduct } from "../interfaces/IProduct.js";
import mongoose, { connection } from "mongoose";
import { Status } from "../enums/status.js";
import mongooseAutoPopulate from "mongoose-autopopulate";

const Schema = mongoose.Schema;

const categoryConn = await mongoose.createConnection("mongodb+srv://Admin:admin123@categories.uhqra.mongodb.net/categories?retryWrites=true&w=majority");
const categorySchema = new Schema({});
const Category = categoryConn.model("categories", categorySchema);

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    require: false,
    trim: true,
  },
  description: {
    type: String,
    require: false,
    trim: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: Category,
      autopopulate: true,
    },
  ],
  brands: [{ type: Schema.Types.ObjectId, required: false, ref: "brands" }],
  images: [String],
  tags: [{ type: Schema.Types.ObjectId, required: false, ref: "tags" }],
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  costPrice: {
    type: Number,
    default: 0,
    required: false,
    trim: true,
  },
  comparePrice: {
    type: Number,
    default: 0,
    required: false,
    trim: true,
  },
  discount: {
    type: Number,
    default: 0,
    required: false,
    trim: true,
  },
  qty: {
    type: Number,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: [Status.active, Status.inactive],
    default: Status.active,
    trim: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  sellWhenOutOfStock: {
    type: Boolean,
    default: false,
  },
  variants: [
    {
      option: {
        type: String,
        trim: true,
      },
      choices: {
        type: [String],
        trim: true,
      },
    },
  ],
});
ProductSchema.plugin(mongooseAutoPopulate);

export default mongoose.model<IProduct & mongoose.Document>("products", ProductSchema);
