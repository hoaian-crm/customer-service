/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { IEvent } from "./event";
import Long = require("long");

export const protobufPackage = "listener";

export interface IListener {
  id: number;
  name: string;
  description: string;
  event: IEvent | undefined;
}

export interface AddListenerDto {
  name: string;
  description: string;
  eventName: string;
}

export interface GetListenersByEventDto {
  eventName: string;
}

export interface GetListenersByEventResult {
  result: IListener[];
}

function createBaseIListener(): IListener {
  return { id: 0, name: "", description: "", event: undefined };
}

export const IListener = {
  encode(message: IListener, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.event !== undefined) {
      IEvent.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IListener {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIListener();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = IEvent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IListener {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      event: isSet(object.event) ? IEvent.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: IListener): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.event !== undefined) {
      obj.event = IEvent.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IListener>, I>>(base?: I): IListener {
    return IListener.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IListener>, I>>(object: I): IListener {
    const message = createBaseIListener();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.event = (object.event !== undefined && object.event !== null)
      ? IEvent.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseAddListenerDto(): AddListenerDto {
  return { name: "", description: "", eventName: "" };
}

export const AddListenerDto = {
  encode(message: AddListenerDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.eventName !== "") {
      writer.uint32(26).string(message.eventName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListenerDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddListenerDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

          message.eventName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddListenerDto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      eventName: isSet(object.eventName) ? globalThis.String(object.eventName) : "",
    };
  },

  toJSON(message: AddListenerDto): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.eventName !== "") {
      obj.eventName = message.eventName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddListenerDto>, I>>(base?: I): AddListenerDto {
    return AddListenerDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddListenerDto>, I>>(object: I): AddListenerDto {
    const message = createBaseAddListenerDto();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.eventName = object.eventName ?? "";
    return message;
  },
};

function createBaseGetListenersByEventDto(): GetListenersByEventDto {
  return { eventName: "" };
}

export const GetListenersByEventDto = {
  encode(message: GetListenersByEventDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetListenersByEventDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetListenersByEventDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetListenersByEventDto {
    return { eventName: isSet(object.eventName) ? globalThis.String(object.eventName) : "" };
  },

  toJSON(message: GetListenersByEventDto): unknown {
    const obj: any = {};
    if (message.eventName !== "") {
      obj.eventName = message.eventName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetListenersByEventDto>, I>>(base?: I): GetListenersByEventDto {
    return GetListenersByEventDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetListenersByEventDto>, I>>(object: I): GetListenersByEventDto {
    const message = createBaseGetListenersByEventDto();
    message.eventName = object.eventName ?? "";
    return message;
  },
};

function createBaseGetListenersByEventResult(): GetListenersByEventResult {
  return { result: [] };
}

export const GetListenersByEventResult = {
  encode(message: GetListenersByEventResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      IListener.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetListenersByEventResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetListenersByEventResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result.push(IListener.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetListenersByEventResult {
    return {
      result: globalThis.Array.isArray(object?.result) ? object.result.map((e: any) => IListener.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetListenersByEventResult): unknown {
    const obj: any = {};
    if (message.result?.length) {
      obj.result = message.result.map((e) => IListener.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetListenersByEventResult>, I>>(base?: I): GetListenersByEventResult {
    return GetListenersByEventResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetListenersByEventResult>, I>>(object: I): GetListenersByEventResult {
    const message = createBaseGetListenersByEventResult();
    message.result = object.result?.map((e) => IListener.fromPartial(e)) || [];
    return message;
  },
};

export interface IListenerController {
  Add(request: AddListenerDto): Promise<IListener>;
  Get(request: GetListenersByEventDto): Promise<GetListenersByEventResult>;
}

export const IListenerControllerServiceName = "listener.IListenerController";
export class IListenerControllerClientImpl implements IListenerController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || IListenerControllerServiceName;
    this.rpc = rpc;
    this.Add = this.Add.bind(this);
    this.Get = this.Get.bind(this);
  }
  Add(request: AddListenerDto): Promise<IListener> {
    const data = AddListenerDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Add", data);
    return promise.then((data) => IListener.decode(_m0.Reader.create(data)));
  }

  Get(request: GetListenersByEventDto): Promise<GetListenersByEventResult> {
    const data = GetListenersByEventDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Get", data);
    return promise.then((data) => GetListenersByEventResult.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
