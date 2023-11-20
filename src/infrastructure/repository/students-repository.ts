import {  Students } from "../../domain/entities/student-entity";
import { StudentsRepository } from "../../domain/repository/students-repository";
import { StudentModel } from "../database/model/student-model";


export class StudentRepositoryImpl implements StudentsRepository{

    async getAll(): Promise<Students[]> {
        return await StudentModel.findAll();
    }
    async create(data: Partial<Students>): Promise<Students> {
        let existingStudent=await StudentModel.findOne({
            where:{email:data.email}
        })
        if (existingStudent){
             throw new Error('Email already in use')
         }
        return  await StudentModel.create(data);
        
    }
     async update(studentData: Partial<Students>): Promise<Students | null> {
        const existingStudents=await StudentModel.findByPk(studentData.id);
        if (!existingStudents) {
           return null;
       }
       return await existingStudents.update(studentData);
    }
    async delete(id: string): Promise<void> {
        await StudentModel.destroy({
            where:{id}
        })
    }
    async findById(id: string): Promise<Students | null> {
        const student=await StudentModel.findByPk(id);
        return student?.toJSON() as Students
    }

}