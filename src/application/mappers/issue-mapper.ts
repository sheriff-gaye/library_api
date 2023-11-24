import { Issue } from "../../domain/entities/issue.entity";


export class IssueMapper{

    public static toDB(issue: Issue): any {
        return {
            id: issue.id,
            bookId: issue.bookId,
            studentId: issue.studentId,
            issueDate: issue.issueDate,
            returnDate: issue.returnDate,
            status: issue.status,
            createdAt: issue.createdAt?.toISOString(),
            updatedAt:issue.updatedAt?.toISOString()
        };
    }

    public static toEntity(issue:any):Issue{
        return Issue.IssueProperties({
            id: issue.id,
            bookId: issue.bookId,
            studentId: issue.studentId,
            issueDate: issue.issueDate,
            returnDate: issue.returnDate,
            status: issue.status,
            createdAt: issue.createdAt,
            updatedAt: issue.updatedAt
        })
    }
}