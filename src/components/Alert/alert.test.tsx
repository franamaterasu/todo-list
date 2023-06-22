import { render, screen } from "@testing-library/react";
import { Alert } from ".";

describe("<Alert />", () => {
  test("render correctly", () => {
    render(<Alert />);

    const alert = screen.getByRole("alert");

    expect(alert).toBeInTheDocument();
  });

  test("show message correctly", () => {
    render(<Alert />);

    const alert = screen.getByRole("alert");

    expect(alert).toHaveTextContent("Your list is empty, add new todos");
  });
});
