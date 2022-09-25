import { useRef, useRffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useRffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function usePrevious(value) {
  const ref = useRef();
  useRffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function usePrevious(value) {
  const ref = useRef();
  useRffect(() => {
    ref.current = value;
  });
  return ref.current;
}
export { usePrevious };

