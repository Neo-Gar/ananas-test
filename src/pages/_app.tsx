import '@/app/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from "@nextui-org/react";
import {Provider} from "react-redux";
import {store} from "@/app/store";
import {Layout} from "@/app/layout";

// Нарушение структуры FSD импортами из app, печалька
// Когда-нибудь начну использовать app-router

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <NextUIProvider>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </NextUIProvider>
      </Provider>
  )
}
