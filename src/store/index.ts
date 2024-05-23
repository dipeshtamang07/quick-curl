import { ApiHeader, HttpMethod } from "@/types";
import { create } from "zustand";

interface StoreProps {
  url: string;
  method: HttpMethod;
  setUrl: (newUrl: string) => void;
  setMethod: (newMethor: HttpMethod) => void;
  requestHeaders: ApiHeader;
  setRequestHeaders: (newHeaders: ApiHeader) => void;
  loading: boolean;
  setLoading: (loadingState: boolean) => void;
  response: any;
  setResponse: (res: any) => void;
  responseStatus: number | null;
  setResponseStatus: (status: number) => void;
  responseHeaders: ApiHeader | null;
  setResponseHeaders: (newHeaders: ApiHeader) => void;
  errorMessage: string | null;
  setErrorMessage: (msg: string | null) => void;
}

export const useStore = create<StoreProps>((set) => ({
  url: "https://jsonplaceholder.typicode.com/users",
  method: HttpMethod.GET,
  setUrl: (newUrl: string) => set({ url: newUrl }),
  setMethod: (newMethod: HttpMethod) => set({ method: newMethod }),
  requestHeaders: {},
  setRequestHeaders: (newHeaders: ApiHeader) =>
    set({ requestHeaders: newHeaders }),
  loading: false,
  setLoading: (loadingState: boolean) => set({ loading: loadingState }),
  response: null,
  setResponse: (res) => set({ response: res }),
  responseStatus: null,
  setResponseStatus: (status: number) => set({ responseStatus: status }),
  responseHeaders: null,
  setResponseHeaders: (newHeaders: ApiHeader) =>
    set({ responseHeaders: newHeaders }),
  errorMessage: null,
  setErrorMessage: (msg: string | null) => set({ errorMessage: msg }),
}));
