
export interface AuthorAttributes {
  id?: string;
  firstName?: string;
  lastName?: string;

}


export class Author {
  constructor(
    public  id: string,
    public  firstName: string,
    public  lastName: string,
  
  ) {}

  
}


