/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "http";

export interface Query {
  limit: number;
  offset: number;
  order: string;
  direction: string;
  keyword: string;
}

function createBaseQuery(): Query {
  return { limit: 0, offset: 0, order: "", direction: "", keyword: "" };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    if (message.order !== "") {
      writer.uint32(26).string(message.order);
    }
    if (message.direction !== "") {
      writer.uint32(34).string(message.direction);
    }
    if (message.keyword !== "") {
      writer.uint32(42).string(message.keyword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.order = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.direction = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.keyword = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      order: isSet(object.order) ? globalThis.String(object.order) : "",
      direction: isSet(object.direction) ? globalThis.String(object.direction) : "",
      keyword: isSet(object.keyword) ? globalThis.String(object.keyword) : "",
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.order !== "") {
      obj.order = message.order;
    }
    if (message.direction !== "") {
      obj.direction = message.direction;
    }
    if (message.keyword !== "") {
      obj.keyword = message.keyword;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.order = object.order ?? "";
    message.direction = object.direction ?? "";
    message.keyword = object.keyword ?? "";
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
