
import express from 'express';
import { CraeteIssueController } from '../../application/controllers/issue/create-conntroller';


export const issueRouter = express.Router();

const createIssueController=new CraeteIssueController();

issueRouter.post('/issue',(req,res)=>createIssueController.createIssue(req,res));
