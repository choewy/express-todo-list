import { Response } from 'express';

declare global {
  interface SuccessData {
    code: number;
    data?: any;
  }

  interface ErrorData {
    code: number;
    message: string;
    error?: any;
  }
}

export const customResponse = (res: Response) => {
  return {
    success({ code = 200, data }: SuccessData) {
      return res.status(code).send({ code, data });
    },
    error({ code, message, error }: ErrorData) {
      return res.status(code).send({ code, message, error });
    },
  };
};
