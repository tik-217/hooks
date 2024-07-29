import { useEffect, useState } from "react";

export default function useFetch(urlPath) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchRequest(params) {
    const isParams = params && !!Object.keys(params).length;
    const createParamsString =
      isParams && new URLSearchParams(params.params).toString();

    setIsLoading(true);

    fetch(urlPath + `?${createParamsString ? createParamsString : ""}`)
      .then((json) => json.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }

  function refetch(params) {
    fetchRequest(params);
  }

  useEffect(() => {
    fetchRequest();
    // eslint-disable-next-line
  }, [urlPath]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
