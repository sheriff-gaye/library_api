import { StudentMapper } from '../../application/mappers/student-mapper';
import {  Students } from "../../domain/entities/student-entity";
import { StudentsRepository } from "../../domain/repository/students-repository";
import { StudentModel } from "../database/model/student-model";


export class StudentRepositoryImpl implements StudentsRepository{

    async getAll(): Promise<Students[]> {
        const students= await StudentModel.findAll();
        return students.map((item)=>StudentMapper.toEntity(item));
    }
    async create(data: Students): Promise<Students> {
        let existingStudent=await StudentModel.findOne({
            where:{email:data.email}
        })
        if (existingStudent)throw new Error('Email already in use');
        
        const mappedStudents=StudentMapper.toDB(data);
        const newStudents=  await StudentModel.create(mappedStudents);
        return StudentMapper.toEntity(newStudents);
        
    }
     async update(studentData: Students): Promise<Students | null> {
        const existingStudents=await StudentModel.findByPk(studentData.id);
        if (!existingStudents) throw new Error("Student Not Found");
        
        const mappedStudents=StudentMapper.toDB(studentData);

       const updated= await existingStudents.update(mappedStudents);
       return StudentMapper.toEntity(updated);
    }
    async delete(id: string): Promise<void> {
        await StudentModel.destroy({
            where:{id}
        })
    }
    async findById(id: string): Promise<Students | null> {
        const student=await StudentModel.findByPk(id);
        return StudentMapper.toEntity(student);
    }

}