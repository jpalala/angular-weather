import { v4 as uuid } from 'uuid';

export class Todo {
  id: string = uuid.v4();
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
