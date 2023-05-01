import "./globals.css";

export const metadata = {
  title: "Card form",
  description: "credit card form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/0212a5fcb5.js"></script>
      </head>
      <body className="bg-primary-2 overflow-hidden text-zinc-50">
        {children}
      </body>
    </html>
  );
}
