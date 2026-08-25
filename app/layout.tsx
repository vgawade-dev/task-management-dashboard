import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { TaskProvider } from "@/components/Tasks/TaskProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />

          <div className="flex">
            <Sidebar />

            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
              {children}
            </main>
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}