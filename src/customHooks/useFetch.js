import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [palse, setPalse] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal });

        if (signal.aborted) {
          throw Error("Fetching data aborted!");
        } else {
          if (!res.ok) {
            throw Error("Sorry we can't find data!");
          } else {
            const data = await res.json();
            if (data) {
              setIsPending(false);
              setResponse(data);
            }
          }
        }
        if(setPalse) {
          console.log('palse is true');
          setPalse(false);
        }
      } catch (err) {
        if (err) {
          setIsPending(false);
          setError(err.message);
          console.log(err);
        }
      }
    })();
  }, [url, palse]);

  return { response, error, isPending, setPalse };
};

export default useFetch;
