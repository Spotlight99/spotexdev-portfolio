import "../styles/globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const start = () => setIsTransitioning(true);
    const end = () => setIsTransitioning(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);

  return (
    <main
      className={`
        ${inter.variable} font-sans
        transition-opacity duration-200
        ${isTransitioning ? "opacity-0" : "opacity-100"}
      `}
    >
      <Component {...pageProps} />
    </main>
  );
}