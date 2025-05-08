// frontend/app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css'; // Ensure your global styles are imported

export const metadata: Metadata = {
  title: 'Apollo247 Clone', // Default title
  description: 'Clone of Apollo247 for doctor listings.',
  // You can add more default metadata here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}