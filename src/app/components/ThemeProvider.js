'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function ThemeProvider({ children }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={true}
      storageKey="theme"
      themes={['light', 'dark']}
    >
      {children}
    </NextThemeProvider>
  );
}