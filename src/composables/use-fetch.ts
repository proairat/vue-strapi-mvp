import { useFetch } from "@vueuse/core";
import { EHttpMethods } from "@/types/enums";

export function useFetchComposable({
  url,
  urlVar,
  method = EHttpMethods.GET,
  body = null,
}: {
  url: string;
  urlVar?: string;
  method?: EHttpMethods;
  body?: BodyInit | null;
}) {
  const { data, onFetchError, onFetchResponse, onFetchFinally } = useFetch(
    urlVar ? `${url}${urlVar}` : url,
    { method, body },
    {
      refetch: true,
    }
  ).json();

  return {
    data,
    onFetchResponse,
    onFetchFinally,
    onFetchError,
  };
}
