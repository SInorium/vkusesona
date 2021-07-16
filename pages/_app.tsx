import type { AppProps } from "next/app";
import "normalize.css";
import "@/styles/global.scss";
import "@/styles/variables.scss";
import "@/styles/heroSlider.scss";
import "@/styles/productSlider.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
