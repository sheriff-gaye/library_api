import { Response, Request, response } from 'express';
import Students from '../models/Students';



export const getStudents = async (req: Request, res: Response) => {
    try {

        const students = await Students.findAll();
        return res.status(200).json(students)

    } catch (error) {
        res.status(500).json({ message: "cannot get students" });

    }
}

export const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const student = await Students.findByPk(id);
        if (!student) {
          return res.status(200).json({message:"Student Not Found"})
        }
        return res.status(200).send(student);


    } catch (error) {
        return res.status(400).json({message:"error in getting the single student"});

    }
}





export const createStudent = async (req: Request, res: Response) => {
    try {
        const { firstname,lastname,date_of_birth,gender,phone,email,student_no,levelId} = req.body;

        if (!levelId) {
            return res.status(400).json({ message: "Level is required" });
        }

        const existingStudent = await Students.findOne({
            where: { email }
        });

        if (existingStudent) {
            return res.status(409).json({ message: "This Student already exists" });
        }
        const newBook = await Students.create({ firstname,lastname,date_of_birth,phone,email,student_no,gender,levelId });

        res.status(200).json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in creating a Student" });
    }
}
