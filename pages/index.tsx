import Head from "next/head";
import {useEffect, useState} from "react";

function useInBrowser() {
    const [isInBrowser, setIsInBrowser] = useState(false);

    useEffect(() => {
        setIsInBrowser(true);
    }, [isInBrowser]);

    return isInBrowser;
}


export default function Home() {
    const isBrowser = useInBrowser();
    const TITLE = isBrowser ? "Runtime Title" : "Rendered Title";
    const DESCRIPTION = isBrowser ? "Runtime Description" : "Rendered Description";
  return (
      <>
          <Head>
              <title>{TITLE}</title>
              <meta name="description" content={DESCRIPTION} />
          </Head>
          <div>
               Hello World.
          </div>
      </>
  )
}
