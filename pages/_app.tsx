import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-pixel: "Press Start 2P", cursive;
          --font-body: "VT323", monospace;
        }
        body {
          font-family: var(--font-body);
          font-size: 22px;
          line-height: 1.65;
        }
        .font-pixel { font-family: var(--font-pixel); }
        .font-body { font-family: var(--font-body); }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
