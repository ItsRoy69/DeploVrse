import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  images: [{type:String}],
  properties: {type:Object},
});

export const Product = models.Product || model('Product', ProductSchema);