import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "./Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      {loading ? <Loading/> : <Component {...pageProps} />}
    </Layout>
  );
}

export default MyApp;
