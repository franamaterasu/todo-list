import "./todoItem.scss";
import { TodoType } from "../../interfaces/todo.interface";

type Props = {
  todo: TodoType;
  handleDelete: (id: number) => void;
  handleComplete: (id: number, isDone: boolean) => void;
};

export const TodoItem = ({
  todo,
  handleDelete,
  handleComplete,
}: Props): JSX.Element => {
  const { id, text, date, isDone } = todo;

  return (
    <li className="d-flex  align-items-center justify-content-between item list-group-item">
      <div>
        <h4 className={`item__name ${isDone && "item__name--strikethrough"}`}>
          {text}
        </h4>
        <p className="item__date">Created on {date}</p>
      </div>
      <div className="d-flex gap-2">
        <button
          className="item__button btn btn-success"
          onClick={() => handleComplete(id, isDone)}>
          {!isDone ? "Complete" : "Recover"}
        </button>
        <button
          className="item__button btn btn-danger"
          onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
