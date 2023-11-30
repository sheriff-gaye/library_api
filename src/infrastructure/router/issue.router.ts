
import express from 'express';
import { CraeteIssueController } from '../../application/controllers/issue/create-conntroller';
import { GetAllIssueController } from '../../application/controllers/issue/getAll-controller';
import { DeleteIssueController } from '../../application/controllers/issue/delete-controller';
import { UpdateIssueController } from '../../application/controllers/issue/update-controller';
import { ReturnIssueController } from '../../application/controllers/issue/return-controller';


export const issueRouter = express.Router();

const createIssueController=new CraeteIssueController();
const getAllIssuesController=new GetAllIssueController();
const deleteIssuesController=new DeleteIssueController();
const updateIssueController=new UpdateIssueController();
const returnIssueController = new ReturnIssueController(); // Instantiate the ReturnIssueController


issueRouter.post('/issue',(req,res)=>createIssueController.createIssue(req,res));
issueRouter.get('/issue',(req,res)=>getAllIssuesController.getAllIssues(req,res));
issueRouter.delete('/issue/:id',(req,res)=>deleteIssuesController.deleteIssue(req,res));
issueRouter.patch('/issue/:id',(req,res)=>updateIssueController.updateIssue(req,res));
issueRouter.patch('/return/:id', (req, res) => returnIssueController.returnIssue(req, res));
