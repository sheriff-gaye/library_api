import { Issue } from "../../../domain/entities/issue.entity";

export type IssueResponse = Promise<Issue>| null | Promise <void>
