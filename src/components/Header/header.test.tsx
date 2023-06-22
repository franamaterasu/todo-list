import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("<Header/>", () => {
  test("render correctly", () => {
    render(<Header />);

    const title = screen.getByRole("heading", {
      name: /todo list \- react \+ typescript/i,
    });

    expect(title).toBeInTheDocument();
  });
});
