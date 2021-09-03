import { useState } from 'react';

const useModal = () => {
  const [isYTShowing, setIsYTShowing] = useState(false);

  function toggleYT() {
    setIsYTShowing(!isYTShowing);
  }

  return {
    isYTShowing,
    toggleYT,
  }
};

export default useModal;