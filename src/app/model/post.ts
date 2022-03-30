export class Post {
    public id: number;
    public name: string;
    public caption: string;
    public postedDate: Date;
    public username: string;
    public location: string;
    public likes: number;
    public commentList: Comment[];
}
