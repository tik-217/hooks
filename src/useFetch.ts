import { useEffect, useState } from "react";
import { IFetchRequestParams } from "./types";

export default function useFetch(urlPath: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function fetchRequest(params?: IFetchRequestParams) {
    const isParams = params && !!Object.keys(params).length;
    const createParamsString =
      isParams &&
      new URLSearchParams({
        ...params.params,
        _limit: params.params._limit.toString(),
      }).toString();

    setIsLoading(true);

    fetch(urlPath + `?${createParamsString ? createParamsString : ""}`)
      .then((json) => json.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }

  function refetch(params: IFetchRequestParams) {
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
