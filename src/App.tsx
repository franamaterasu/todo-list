import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoType } from "./interfaces/todo.interface";
import { Header } from "./components/Header";
import { CreateTodoItem } from "./components/CreateTodoItem";
import { Alert } from "./components/Alert";

const App = () => {
  const [todoList, setTodoList] = useState<TodoType[] | []>([
    {
      id: 1,
      text: "Learn more JS",
      date: new Date().toLocaleDateString("es-ES"),
      isDone: false,
    },
    {
      id: 2,
      text: "Improve React and Typescript knowledge",
      date: new Date().toLocaleDateString("es-ES"),
      isDone: false,
    },
    {
      id: 3,
      text: "Practice with fake projects",
      date: new Date().toLocaleDateString("es-ES"),
      isDone: false,
    },
  ]);

  const handleDelete = (id: number) => {
    const newTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodos);
  };

  const handleComplete = (id: number, isDone: boolean) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !isDone,
        };
      }

      return todo;
    });

    setTodoList(newTodos);
  };

  return (
    <>
      <Header />
      <section className="container">
        {todoList.length < 1 ? (
          <Alert />
        ) : (
          <TodoList
            todoList={todoList}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        )}

        <hr />
        <CreateTodoItem setTodoList={setTodoList} todoList={todoList} />
      </section>
    </>
  );
};

export default App;
