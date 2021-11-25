import { useEffect, useLayoutEffect, useState } from 'react';

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Detect window width
export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
}

// Extract the active channel Id from URL
export const useGetActiveChannelId = () => {
  const params = useParams();
  const activeChannelId = parseInt(params.channel);
  return activeChannelId
}

// Detect whether the user clicks outside of a component
export const useDetectClickOutside = ({ action, listenCondition, ref }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(action());
      }
    };

    if (listenCondition) {
      document.addEventListener("click", handleClickOutside, false);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [action, listenCondition, dispatch, ref]);
}