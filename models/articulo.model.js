import mongoose, {Schema } from "mongoose";

const Articulos = new Schema ({
     nombre : {type: String, maxlenght: 50, require: true},
     precio: Number,

     createdAt: {
     type: Date, default: Date.now
    }


});

const Articulo= mongoose.model('articulo', Articulos);
export default Articulo;