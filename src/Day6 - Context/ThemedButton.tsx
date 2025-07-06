// ThemedButton.tsx
import { memo } from 'react';
import { useTheme } from './ThemeContext';

export const ThemedButton6 = memo(function ThemedButton() {
  const { theme, toggle } = useTheme();
  console.log('Button render');

  return (
    <button
      onClick={toggle}
      style={{
        background: theme === 'dark' ? '#333' : '#eee',
        color:       theme === 'dark' ? '#fff' : '#000',
      }}
    >
      Toggle theme
    </button>
  );
});
