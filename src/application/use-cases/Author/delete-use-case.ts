import { AuthorRepository } from "../../../domain/repository/author-repository";

export class DeleteAuthorUseCase {
    constructor(
        private authorRepository: AuthorRepository
    ) { }
    async execute(id: string) {
        await this.authorRepository.delete(id);
    }

}