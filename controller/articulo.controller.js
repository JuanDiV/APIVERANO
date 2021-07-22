//metodo agregar

import model from '../models';

export default {
    agregar: async(req, res, next)=> {
        try{
            const {nombre, precio}=req.body;

            const articulos= new model.Articulo({
                nombre,
                precio
            });
    
            const registro = await articulos.save();
            res.status(200).json(registro);
            console.log(req.body);

        }catch(e){
            res.status(500).send({
                message: "ocurrio un error al guardar los datos"

            });

           next(e);
        }
        
    }
    
}
