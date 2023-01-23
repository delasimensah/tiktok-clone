import type { AppProps } from "next/app";
import { Figtree } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";

// my imports
import getTheme from "@lib/mantineTheme";

// global styles
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

      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
