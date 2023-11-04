import express from "express";
import { createLevel, deleteLevel, getLevels, updateLevel } from "../../application/controllers/level/level-controller";


const levelRouter = express.Router();


levelRouter.get('/level', getLevels);
levelRouter.post('/level',createLevel);
levelRouter.patch('/level/:id',updateLevel);
levelRouter.delete('/level/:id',deleteLevel);


export default levelRouter

