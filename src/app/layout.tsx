import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider, OpenBarProvider } from "@/contexts";

export const metadata = {
  title: "Drugig",
  description: "Generated by Drugig",
  icons: {
    icon: "https://www.iconninja.com/files/631/966/414/repository-github-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <OpenBarProvider>
            <AuthProvider>
              <SideBar>
                <NavBar />
                {children}
                <Footer />
              </SideBar>
            </AuthProvider>
          </OpenBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}