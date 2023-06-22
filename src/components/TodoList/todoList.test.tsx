import { render, screen } from "@testing-library/react";
import { TodoList } from ".";

const todoList = [
  {
    id: 1,
    text: "Learn more JS",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: 2,
    text: "Improve React and Typescript knowledge",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: 3,
    text: "Practice with fake projects",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
];

const shortTodoList = [
  {
    id: 1,
    text: "Learn more JS",
    date: new Date().toLocaleDateString(),
    isDone: true,
  },
];

describe("<TodoList />", () => {
  test("render correctly", () => {
    render(
      <TodoList
        todoList={todoList}
        handleDelete={() => {}}
        handleComplete={() => {}}
      />
    );

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });

  test("render list of todos", () => {
    render(
      <TodoList
        todoList={todoList}
        handleDelete={() => {}}
        handleComplete={() => {}}
      />
    );

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });

  test("show a different message when one task is done", () => {
    render(
      <TodoList
        todoList={shortTodoList}
        handleDelete={() => {}}
        handleComplete={() => {}}
      />
    );

    const shortTodoListLength = shortTodoList.length;

    const message = screen.getByText(
      `1 task completed of ${shortTodoListLength}`
    );

    expect(message).toBeInTheDocument();
  });

  test("show a different message when todo list has more than one item", () => {
    render(
      <TodoList
        todoList={todoList}
        handleDelete={() => {}}
        handleComplete={() => {}}
      />
    );

    const todoListLength = todoList.length;

    const message = screen.getByText(`0 tasks completed of ${todoListLength}`);

    expect(message).toBeInTheDocument();
  });
});
