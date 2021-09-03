import { useState } from 'react';

const useModal = () => {
  const [isTWShowing, setIsTWShowing] = useState(false);

  function toggleTW() {
    setIsTWShowing(!isTWShowing);
  }

  return {
    isTWShowing,
    toggleTW,
  }
};

export default useModal;