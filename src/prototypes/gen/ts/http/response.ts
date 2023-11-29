/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";
import Long = require("long");

export const protobufPackage = "http";

export interface Response {
  messages: Response_Message[];
  data: Response_Data | undefined;
}

export interface Response_Data {
  result: Any | undefined;
  total: number;
  limit: number;
  offset: number;
}

export interface Response_Message {
  code: number;
  description: string;
  field: string;
  metadata: Any | undefined;
}

function createBaseResponse(): Response {
  return { messages: [], data: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Response_Message.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Response_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(Response_Message.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = Response_Data.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      messages: globalThis.Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Response_Message.fromJSON(e))
        : [],
      data: isSet(object.data) ? Response_Data.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Response_Message.toJSON(e));
    }
    if (message.data !== undefined) {
      obj.data = Response_Data.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.messages = object.messages?.map((e) => Response_Message.fromPartial(e)) || [];
    message.data = (object.data !== undefined && object.data !== null)
      ? Response_Data.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseResponse_Data(): Response_Data {
  return { result: undefined, total: 0, limit: 0, offset: 0 };
}

export const Response_Data = {
  encode(message: Response_Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response_Data {
    return {
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: Response_Data): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = Any.toJSON(message.result);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response_Data>, I>>(base?: I): Response_Data {
    return Response_Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response_Data>, I>>(object: I): Response_Data {
    const message = createBaseResponse_Data();
    message.result = (object.result !== undefined && object.result !== null)
      ? Any.fromPartial(object.result)
      : undefined;
    message.total = object.total ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseResponse_Message(): Response_Message {
  return { code: 0, description: "", field: "", metadata: undefined };
}

export const Response_Message = {
  encode(message: Response_Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.field !== "") {
      writer.uint32(26).string(message.field);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.field = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metadata = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response_Message {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      field: isSet(object.field) ? globalThis.String(object.field) : "",
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: Response_Message): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Any.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response_Message>, I>>(base?: I): Response_Message {
    return Response_Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response_Message>, I>>(object: I): Response_Message {
    const message = createBaseResponse_Message();
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    message.field = object.field ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Any.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
