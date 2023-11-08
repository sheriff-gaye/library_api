import express from "express";
import { CreateLevelController } from "../../application/controllers/level/create-controller";
import { GetAllLevelController } from '../../application/controllers/level/getAll-controller';
import { UpdateLevelController } from "../../application/controllers/level/update-controller";
import { DeleteLevelController } from "../../application/controllers/level/delete-controller";


const levelRouter = express.Router();

const createLevelController=new CreateLevelController();
const getAllLevelController=new GetAllLevelController();
const updateLevelController=new UpdateLevelController();
const deleteLevelController=new DeleteLevelController();


levelRouter.get('/level', (req,res)=>getAllLevelController.getLevels(req,res));
levelRouter.post('/level',(req,res)=>createLevelController.createLevel(req,res));
levelRouter.patch('/level/:id',(req,res)=>updateLevelController.updateLevel(req,res));
levelRouter.delete('/level/:id',(req,res)=>deleteLevelController.deleteLevel(req,res));


export default levelRouter

