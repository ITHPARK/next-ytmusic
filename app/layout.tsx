import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import {sleep} from "@/lib/utils"
import Sidebar from "@/components/Sidebar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone YT Music",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
    console.log("before RootLayout sleep");
    
    //서버사이드 렌더링을 하는데 2초가 걸림 2초 뒤에 Rootlayout 나타남
    //브라우저에 페이지 자체가 늦게 뜨는것이므로 RootLayout애는 지연이 걸릴만한요소를 지양하고 서브 page에서 loading을 걸고 데이터 fetching등을 하는것이 좋음
    
    await sleep(2000);
    console.log("after RootLayout sleep");
  */

  return (
    <html lang="en">
      <body >
          {/* shadcn 다크모드 사용 */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar>
              {children}
            </Sidebar>
          </ThemeProvider>
        </body>
    </html>
  );
}