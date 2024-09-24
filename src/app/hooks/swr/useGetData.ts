import useSWR from "swr";

interface Config {
    shouldFetch: boolean;
}

const fetcher = <T>(url: string): Promise<T> => fetch(url).then((res) => res.json());

const useGetData = <T>(url: string, {shouldFetch = true}: Config) => {
  const { data, error } = useSWR<T>(shouldFetch ? url : null, fetcher);

  return { data, error };
};

export default useGetData;
