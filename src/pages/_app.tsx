import "@/styles/globals.css";
import { NextPage } from "next";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { enUS } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#785FC9",
      dark: "#4B3493",
    },
    secondary: {
      main: "#211051",
    },
  },
});
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <AppCacheProvider {...pageProps}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider
            adapterLocale={enUS}
            dateAdapter={AdapterDateFns}
          >
            {getLayout(<Component {...pageProps} />)}
          </LocalizationProvider>
        </ThemeProvider>
      </AppCacheProvider>
    </>
  );
}
