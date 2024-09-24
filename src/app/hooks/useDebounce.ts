import { useState, useRef, useCallback } from "react";

const useDebounce = <T,>(initialValue: T, delay = 500) => {
    const [value, setValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  
    const handleSetValue = useCallback(
      (newValue: T) => {
        setValue(newValue);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        const handler = setTimeout(() => {
          setDebouncedValue(newValue);
        }, delay);
        timeoutRef.current = handler;
      },
      [delay],
    );
    return { value, setValue: handleSetValue, debouncedValue, setDebouncedValue };
  };
  
  export default useDebounce;
  