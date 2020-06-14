import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // we use "useRef" to point to a single element across rerenders
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    // Add the element when component renders, then remove when it unmounts
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // Returning a function inside useEffect is equivelant to using componentWillUnmount
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  // Empty array of dependencies so it only runs once
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
