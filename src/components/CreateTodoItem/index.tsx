import { Dispatch, SetStateAction, useState } from "react";
import "./createTodoItem.scss";
import { TodoType } from "../../interfaces/todo.interface";

interface Props {
  todoList: TodoType[];
  setTodoList: Dispatch<SetStateAction<TodoType[]>>;
}

export const CreateTodoItem = ({
  setTodoList,
  todoList,
}: Props): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputValue !== "") {
      setTodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          text: inputValue,
          date: new Date().toLocaleDateString(),
          isDone: false,
        },
      ]);

      setInputValue("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control input"
        type="text"
        placeholder="Add new todo"
        name="newTodo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
