let ID = 0;

export class Todo {
  constructor(text) {
    this.text = text;

    this.id = ID;

    // Tăng ID sau khi tạo xong đối tượng.
    ID++;
  }
}

export class TodoStatus extends Todo {
  constructor(text) {
    super(text);

    this.status = "";
  }
}
