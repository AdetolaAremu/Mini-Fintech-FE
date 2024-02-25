export interface ErrorResponse {
  response: {
    status: number;
    data: {
      status: string;
      message: string;
    };
  };
}
