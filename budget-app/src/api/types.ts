export interface ListRequest<T = undefined> {
  filter: T;
  paging: Paging;
}

export interface ResultResponse<T> {
  result: T;
}

export interface ListResponse<T> extends ResultResponse<T[]> {
  count: number;
}

export interface BaseModel {
  id: number;
  updated?: string;
  created: string;
}

export interface Paging {
  limit: number;
  offset: number;
}
