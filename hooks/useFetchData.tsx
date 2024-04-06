import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

type fetchProps = {
  queryKey: [string, string] | [string];
  dataProtected: string;
};

export const useFetchData = ({ queryKey, dataProtected }: fetchProps) => {
  const { data, isLoading, isError, isSuccess, refetch, isRefetching } =
    useQuery({
      queryKey: queryKey,
      queryFn: async () =>
        await axios.get(`http://127.0.0.1:8000/api/${dataProtected}`),
      placeholderData: keepPreviousData,
    });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isRefetching,
  };
};
