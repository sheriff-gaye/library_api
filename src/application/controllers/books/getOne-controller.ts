import { BooksRepositoryImpl } from "../../../infrastructure/repository/books-repository";
import { GetOneBooksUseCase } from "../../use-cases/books/get-one-use-case";
import { Response,Request } from "express";



export class GetOneBookController {

    private getOneBookUseCase:GetOneBooksUseCase

    constructor(){

        const bookRepository=new BooksRepositoryImpl();
        this.getOneBookUseCase=new GetOneBooksUseCase(bookRepository);

    }


    async getonebook(req:Request,res:Response){
        try {
            const {id}=req.params
            const result = await  this.getOneBookUseCase.execute(id);
            res.json(result);
            
        } catch (error) {
            res.status(400).json({message:"Something went wrong"});

            
        }
    }




}