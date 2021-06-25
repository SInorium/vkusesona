import type { AppProps } from "next/app";
import "normalize.css";
import "@/styles/global.scss";
import "@/styles/heroSlider.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
