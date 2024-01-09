export interface ErrorResponse {
  data: {
    error: {
      code: string;
      message: string;
    };
  };
  status: number;
}
