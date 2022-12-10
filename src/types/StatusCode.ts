import { QueryResult } from "pg";

export type StatusCode = {
  [key: number]: string;
}

export type propsEmail = QueryResult<any> | object | string | Array<any> | null;

export type dataResponseCustome = QueryResult<any> | object | string | Array<any> | null;

export type ResponseCustomeData = {
     data: dataResponseCustome;
    status : {
        code: number;
        text: string;
        message: string;
    };
}

export type myQueryResult = QueryResult;
