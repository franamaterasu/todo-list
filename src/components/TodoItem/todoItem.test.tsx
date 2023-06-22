import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoItem } from ".";

const incompleteTodo = {
  id: 1,
  text: "Learn more JS",
  date: new Date().toLocaleDateString("es-ES"),
  isDone: false,
};

describe("<TodoItem />", () => {
  test("render correctly", () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        handleComplete={() => {}}
        handleDelete={() => {}}
      />
    );

    const todoItem = screen.getByRole("listitem");

    const todoItemTitle = screen.getByRole("heading", {
      name: incompleteTodo.text,
    });

    const todoItemDate = screen.getByText(
      `Created on ${new Date().toLocaleDateString("es-ES")}`
    );

    const completeButton = screen.getByRole("button", { name: /complete/i });

    const deleteButton = screen.getByRole("button", { name: /delete/i });

    expect(todoItem).toBeInTheDocument();
    expect(todoItemTitle).toBeInTheDocument();
    expect(todoItemDate).toBeInTheDocument();
    expect(completeButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test("functions must be called", async () => {
    const user = userEvent.setup();

    const handleCompleteClick = vi.fn();
    const handleDeleteClick = vi.fn();

    render(
      <TodoItem
        todo={incompleteTodo}
        handleComplete={handleCompleteClick}
        handleDelete={handleDeleteClick}
      />
    );

    const completeButton = screen.getByRole("button", { name: /complete/i });
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    await user.click(completeButton);
    await user.click(deleteButton);

    expect(handleCompleteClick).toHaveBeenCalledTimes(1);
    expect(handleDeleteClick).toHaveBeenCalledTimes(1);
  });
});
