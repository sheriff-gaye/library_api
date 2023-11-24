export interface CategoryAttributes {
    id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export class Category {
    private _id: string;
    private _name: string;
    private _createdAt?: Date;
    private _updatedAt?: Date;

    private constructor(props: CategoryAttributes) {
        this._id = props.id;
        this._name = props.name;
        this._createdAt = props.createdAt ? new Date(props.createdAt) : undefined;
        this._updatedAt = props.updatedAt ? new Date(props.updatedAt) : undefined;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get createdAt(): Date | undefined {
        return this._createdAt;
    }

    get updatedAt(): Date | undefined {
        return this._updatedAt;
    }

    
    toJSON(): CategoryAttributes {
        return {
            id: this._id,
            name: this._name,
            createdAt: this._createdAt?.toISOString(),
            updatedAt: this._updatedAt?.toISOString(),
        };
    }

    public static CreateProperties(props: CategoryAttributes): Category {
        return new Category(props);
    }
}
