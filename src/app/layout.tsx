// app/layout.tsx
import { ThemeProvider } from '../components/theme-provider';
import { Toaster } from '../components/ui/toaster';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir='rtl'>
      <body>
        <ThemeProvider defaultDark>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}