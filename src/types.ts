export interface IFetchRequestParams {
  params: {
    _limit: number;
  };
}

interface IApiResponse {
  userId: 1;
  id: 1;
  title: string;
  body: string;
}

export interface IUseFetchResponse {
  data: IApiResponse[];
  isLoading: boolean;
  error: string;
  refetch: (params: IFetchRequestParams) => void;
}
