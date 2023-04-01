import "@/styles/globals.css";
import store from "@/createslice/movieReducer";
import { Provider } from "react-redux";
import { Roboto } from "next/font/google";
const inter = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}
