import { Issue } from "../../domain/entities/issue.entity";
import { IssueRepository } from "../../domain/repository/issue-repository";
import { IssueModel } from '../database/model/issue-model';
import { IssueMapper } from '../../application/mappers/issue-mapper';
import { BooksModel } from "../database/model/books-model";


export class IssueRepositoryImpl implements IssueRepository{

    async updateIssue(issue: Issue): Promise<Issue | null > {
        const existingIssue=await IssueModel.findByPk(issue.id);
        if(!existingIssue)throw new Error("Issue Not Found");

        const mappedIssue=IssueMapper.toDB(issue);
        const updated=await existingIssue.update(mappedIssue)
        return IssueMapper.toEntity(updated);

    }
    async deleteIssue(id: string): Promise<void> {
        const issueToDelete = await IssueModel.findByPk(id);

        if (!issueToDelete) {
            throw new Error("Issue Not Found");
        }
        const book = await BooksModel.findByPk(issueToDelete.bookId);

        await issueToDelete.destroy();

        if (book) {
            await book.update({ copies: book.copies + 1 });
        }
    }
    async getIssue(id: string): Promise<Issue> {
        const issue=await IssueModel.findByPk(id);
        return IssueMapper.toEntity(issue);
    }
    async getIssues(): Promise<Issue[]> {
        const issues=await IssueModel.findAll();
        return issues.map((issue)=>IssueMapper.toEntity(issue));
    }
    async createIssue(issue: Issue): Promise<Issue> {

        const { bookId, studentId } = issue;

        const issuebook = await BooksModel.findByPk(bookId);
        if (!issuebook || issuebook.copies <= 0) {
            throw new Error("Book not available for issue");
        }

        const existingIssueForStudent = await IssueModel.findOne({
            where: { bookId, studentId },
        });
        if (existingIssueForStudent) {
            throw new Error("Student has already issued this book");
        }

        const mappedIssue = IssueMapper.toDB(issue);
        const newissue=await IssueModel.create(mappedIssue);

        const book = await BooksModel.findByPk(bookId);
        if (book) {
            await book.update({ copies: book.copies - 1 });
        }

        return IssueMapper.toEntity(newissue);
       
    }
    

}