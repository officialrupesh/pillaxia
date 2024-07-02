
  import type { AppProps } from "next/app";
  import "bootstrap/dist/css/bootstrap.css";
  import { Fragment } from "react";
  import GlobalStyled from "../../globalStyled";
  export default function App({ Component, pageProps }: AppProps) {
    return (
      <Fragment>
        <GlobalStyled />
        <Component {...pageProps} />
      </Fragment>
    );
  }
