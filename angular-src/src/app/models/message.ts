export class Message {
  from_author: string;
  to_author: string;
  content: string;
  createdAt: Date;

  constructor(author: string, to_author: string, content: string) {
    this.from_author = author,
    this.to_author = to_author;
    this.content = content;
    this.createdAt = new Date();
  }
}
