export interface TodoInitialState {
  todos: TodoType[];
  loading:boolean;
}

export interface TodoType {
  id: number;
  content: string;
  state:boolean;
}
