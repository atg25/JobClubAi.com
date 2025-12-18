import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

describe("Container component", () => {
  it("should render children", () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    );
    expect(screen.getByText("Test Content")).toBeDefined();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Test</div>
      </Container>
    );
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild.className).toContain("custom-class");
  });
});

describe("Button component", () => {
  it("should render button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("should handle click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render primary variant by default", () => {
    const { container } = render(<Button>Button</Button>);
    const button = container.querySelector("button");
    // Button uses slate colors, not blue
    expect(button?.className).toContain("bg-slate-700");
  });

  it("should render secondary variant", () => {
    const { container } = render(<Button variant="secondary">Button</Button>);
    const button = container.querySelector("button");
    expect(button?.className).toContain("bg-transparent");
  });

  it("should render as link when href is provided", () => {
    render(
      <BrowserRouter>
        <Button href="/test">Link Button</Button>
      </BrowserRouter>
    );
    const link = screen.getByText("Link Button");
    expect(link.tagName).toBe("A");
  });
});
