/**
 * @jest-environment jsdom
 */


import { renderHook, act } from "@testing-library/react";
import useDebounce from "../useDebounce";


jest.useFakeTimers();

describe("useDebounce hook", () => {
  it("should reset the timer when the value changes", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    act(() => {
      result.current.setValue("new value");
    });

    act(() => {
      jest.advanceTimersByTime(300);
      result.current.setValue("new value 2");
    });

    act(() => {
      jest.advanceTimersByTime(500); // Fast forward again
    });

    expect(result.current.debouncedValue).toBe("new value 2");
  });
});
