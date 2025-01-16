export class Content {
    constructor(
      public icon?: string,
      public title?: string,
      public contentType?: string,
      public audience?: string,
      public topic?: string,
      public date?: Date,
      public numberOfWords?: number,
      public comments?: string
    ) {}
  }