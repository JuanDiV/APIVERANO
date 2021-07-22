//metodo agregar

import model from '../models';

export default {
    agregar: async(req, res, next)=> {
        try{
            const {nombre, apellidos, comentario}=req.body;

            const personas= new model.Persona({
                nombre,
                apellidos,
                comentario
            });
    
            const registro = await personas.save();
            res.status(200).json(registro);
            console.log(req.body);

        }catch(e){
            res.status(500).send({
                message: "ocurrio un error al guardar los datos"

            });

           next(e);
        }
        
    },
    consultar: async(req,res, next)=>{
    try {
        const personas= await model.Persona.find();
        console.log(personas);
        res.json(personas);
    } catch (error) {
        res.status(500).send({
            message: "Ocurrio un error al consultar"
        });

        next(error);
    }
    },

    consultarUno: async (req, res, next) => {
        try {
          const consulta = await model.Persona.findById(req.params.id);
    
          if (!consulta) {
            res.status(404).send({
              message: "El registro con el id solicitado no existe",
            });
          } else {
            res.status(200).json(consulta);
          }
        } catch (error) {
          res.status(500).send({
            message: "Ocurrio un error al consultar una persona",
          });
          next();
        }
      },

      eliminar:async(req, res, next)=>{
        try {
  
          const eliminarPersona= await model.Persona.findByIdAndDelete(req.params.id);
          res.status(200).send({
              message: "La informacion ha sido eliminada correctamente"
          });
            
        } catch (error) {
            res.status(500).send({
                message: "El id para eliminar persona no existe"
            });
  
            next(error);
        }
    },

    Actualizar: async(req, res, next)=>{
        try {
            const {nombre, apellidos, comentario}=req.body;
  
            const actualizarPersona={
                nombre,apellidos,comentario
            }
  
            const datosActuales = await model.Persona.findByIdAndUpdate(req.params.id, actualizarPersona);
            res.json(actualizarPersona);
  
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al tratar de actualizar"
            });
            next(error);
        }
    }
};
    