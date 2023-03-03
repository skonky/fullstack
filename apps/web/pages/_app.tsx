import "../globals.css";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto">
        <NextHead>
          <title>GraphQL Modules with Typescript and Tailwindcss</title>
          <meta
            name="description"
            content="GraphQL Modules with Typescript and Tailwindcss"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </NextHead>
        <div>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
