import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

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
      } catch (err) {
        if (err) {
          setIsPending(false);
          setError(err.message);
          console.log(err);
        }
      }
    })();
  }, [url]);

  return { response, error, isPending };
};

export default useFetch;
