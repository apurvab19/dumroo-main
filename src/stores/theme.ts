import { useState } from 'react';

const useThemeStore = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme };
};

export default useThemeStore;
