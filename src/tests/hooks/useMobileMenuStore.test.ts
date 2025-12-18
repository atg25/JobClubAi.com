import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useMobileMenuStore } from "../../hooks/useMobileMenuStore";

describe("useMobileMenuStore", () => {
  it("should initialize with menu closed", () => {
    const { result } = renderHook(() => useMobileMenuStore());
    expect(result.current.isOpen).toBe(false);
  });

  it("should toggle menu state", () => {
    const { result } = renderHook(() => useMobileMenuStore());

    // Initially closed
    expect(result.current.isOpen).toBe(false);

    // Toggle open
    result.current.toggle();
    expect(result.current.isOpen).toBe(true);

    // Toggle closed
    result.current.toggle();
    expect(result.current.isOpen).toBe(false);
  });

  it("should close menu", () => {
    const { result } = renderHook(() => useMobileMenuStore());

    // Open menu first
    result.current.toggle();
    expect(result.current.isOpen).toBe(true);

    // Close menu
    result.current.close();
    expect(result.current.isOpen).toBe(false);
  });

  it("should keep menu closed if close is called when already closed", () => {
    const { result } = renderHook(() => useMobileMenuStore());

    expect(result.current.isOpen).toBe(false);
    result.current.close();
    expect(result.current.isOpen).toBe(false);
  });
});
