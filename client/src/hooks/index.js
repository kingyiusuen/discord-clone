import { useEffect, useLayoutEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

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

export const useActiveChannel = () => {
  const loading = useSelector(state => state.channels.loading);
  const activeChannelId = useSelector(state => state.channels.active);
  const channelsById = useSelector(state => state.channels.byId);
  return !loading && channelsById[activeChannelId];
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