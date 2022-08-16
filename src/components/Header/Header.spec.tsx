import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(
      screen.getByText("O melhor para você ouvir, sempre")
    ).toBeInTheDocument();
  });

  it("should be able to render logo", () => {
    render(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
