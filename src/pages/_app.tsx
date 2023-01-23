import type { AppProps } from "next/app";
import { Figtree } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";
import { TopBar } from "@components";
import getTheme from "@lib/mantineTheme";
import "../styles/globals.css";

const figTree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const App = ({ Component, pageProps }: AppProps) => {
  const theme = getTheme(figTree.style.fontFamily);

  return (
    <MantineProvider theme={theme}>
      <DefaultSeo
        title="TikTok Clone"
        description="App build with Next.js and Firebase"
      />

      <style jsx global>{`
        * {
          font-family: ${figTree.style.fontFamily};
        }
      `}</style>

      <TopBar />

      <div className="flex flex-col justify-start min-h-screen">
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
};

export default App;
