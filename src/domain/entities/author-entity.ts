
export class Author {
  constructor(
    public  id: string,
    public  firstName: string,
    public  lastName: string,
  
  ) {}

  getId(): string {
    return this.id;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  
}


