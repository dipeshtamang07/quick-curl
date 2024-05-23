export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface HeaderItem {
  key: string;
  value: string;
  enabled: boolean;
}

export interface ApiResponse {
  [key: string]: any;
}

export interface ApiHeader {
  [key: string]: any;
}
