import { TodoType } from "../../interfaces/todo.interface";
import { TodoItem } from "../TodoItem";
import "./TodoList.scss";

type Props = {
  todoList: TodoType[];
  handleDelete: (id: number) => void;
  handleComplete: (id: number, isDone: boolean) => void;
};

export const TodoList = ({
  todoList,
  handleDelete,
  handleComplete,
}: Props): JSX.Element => {
  const uncompletedTask = todoList.filter((todo) => todo.isDone === true);

  return (
    <>
      <ul className="list list-group">
        {todoList.map((todo: TodoType) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          );
        })}
      </ul>
      <p className="list__message">
        {uncompletedTask.length}{" "}
        {uncompletedTask.length === 1 ? "task" : "tasks"} completed of{" "}
        {todoList.length}
      </p>
    </>
  );
};
