import {useRef, useEffect} from 'react'
export default function useClickAnywhere(handler) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    if(handler) {
      handlerRef.current = handler;
    }
  }, [handler])

  useEffect(() => {
    function handleClick(event) {
      handlerRef.current(event);
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    }
    
  }, [])
}