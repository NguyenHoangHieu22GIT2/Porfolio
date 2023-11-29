export type ResponseType<T> = {
  statusCode: number;
  status: string;
} & (
  | {
      data: T;
    }
  | { message: string }
);
