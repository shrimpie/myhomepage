export class Message {
  author: string;
  toAuthor: string;
  content: string;
  createdAt: Date;

  constructor(author: string, to_author: string, content: string) {
    this.author = author,
    this.toAuthor = to_author;
    this.content = content;
    this.createdAt = new Date();
  }
}
