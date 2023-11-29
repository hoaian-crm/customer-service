import { Messages } from './messages';

export type IMessage = {
  code: number;
  description?: string;
  field?: string;
  metaData?: string;
};

export type ResponseData<T extends any> = {
  result: T | Array<T>;
  total?: number;
};

export class Response<T extends any> {
  messages: Array<IMessage>;
  data: ResponseData<T>;

  static findSuccess<T extends any>([result, count]: [
    result: Array<T>,
    number,
  ]): Response<T> {
    return {
      messages: [Messages.getSuccess],
      data: {
        result,
        total: count,
      },
    };
  }

  static createSuccess<T extends any>(result: T) {
    return {
      messages: [Messages.createSuccess],
      data: {
        result,
        total: 1,
      },
    };
  }

  static updateSuccess<T extends any>(result: T) {
    return {
      messages: [Messages.updateSuccess],
      data: {
        result,
        total: 1,
      },
    };
  }

  static deleteSuccess<T extends any>(result: T) {
    return {
      messages: [Messages.deleteSuccess],
      data: {
        result: null,
        total: result,
      },
    };
  }
}
