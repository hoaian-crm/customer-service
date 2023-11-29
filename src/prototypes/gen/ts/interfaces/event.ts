/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { SendMailDto } from "./mail";
import Long = require("long");

export const protobufPackage = "event";

export enum Events {
  A = 0,
  UNRECOGNIZED = -1,
}

export function eventsFromJSON(object: any): Events {
  switch (object) {
    case 0:
    case "A":
      return Events.A;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Events.UNRECOGNIZED;
  }
}

export function eventsToJSON(object: Events): string {
  switch (object) {
    case Events.A:
      return "A";
    case Events.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface IEvent {
  id: number;
  name: string;
  description?: string | undefined;
}

export interface CreateEventDto {
  name: string;
  description?: string | undefined;
}

export interface GetEventDto {
  name: string;
}

export interface EmitEventDto {
  name: string;
  payload: EmitEventDto_Payload | undefined;
}

export interface EmitEventDto_Payload {
  mail?: SendMailDto | undefined;
}

export interface EmitEventResult {
  code: number;
  message: string;
}

function createBaseIEvent(): IEvent {
  return { id: 0, name: "", description: undefined };
}

export const IEvent = {
  encode(message: IEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIEvent();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IEvent {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
    };
  },

  toJSON(message: IEvent): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IEvent>, I>>(base?: I): IEvent {
    return IEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IEvent>, I>>(object: I): IEvent {
    const message = createBaseIEvent();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseCreateEventDto(): CreateEventDto {
  return { name: "", description: undefined };
}

export const CreateEventDto = {
  encode(message: CreateEventDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEventDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEventDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEventDto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
    };
  },

  toJSON(message: CreateEventDto): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEventDto>, I>>(base?: I): CreateEventDto {
    return CreateEventDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEventDto>, I>>(object: I): CreateEventDto {
    const message = createBaseCreateEventDto();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseGetEventDto(): GetEventDto {
  return { name: "" };
}

export const GetEventDto = {
  encode(message: GetEventDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEventDto {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetEventDto): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEventDto>, I>>(base?: I): GetEventDto {
    return GetEventDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetEventDto>, I>>(object: I): GetEventDto {
    const message = createBaseGetEventDto();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEmitEventDto(): EmitEventDto {
  return { name: "", payload: undefined };
}

export const EmitEventDto = {
  encode(message: EmitEventDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.payload !== undefined) {
      EmitEventDto_Payload.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmitEventDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmitEventDto();
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

          message.payload = EmitEventDto_Payload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmitEventDto {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      payload: isSet(object.payload) ? EmitEventDto_Payload.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: EmitEventDto): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.payload !== undefined) {
      obj.payload = EmitEventDto_Payload.toJSON(message.payload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EmitEventDto>, I>>(base?: I): EmitEventDto {
    return EmitEventDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmitEventDto>, I>>(object: I): EmitEventDto {
    const message = createBaseEmitEventDto();
    message.name = object.name ?? "";
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? EmitEventDto_Payload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseEmitEventDto_Payload(): EmitEventDto_Payload {
  return { mail: undefined };
}

export const EmitEventDto_Payload = {
  encode(message: EmitEventDto_Payload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mail !== undefined) {
      SendMailDto.encode(message.mail, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmitEventDto_Payload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmitEventDto_Payload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mail = SendMailDto.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmitEventDto_Payload {
    return { mail: isSet(object.payload) ? SendMailDto.fromJSON(object.payload) : undefined };
  },

  toJSON(message: EmitEventDto_Payload): unknown {
    const obj: any = {};
    if (message.mail !== undefined) {
      obj.payload = SendMailDto.toJSON(message.mail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EmitEventDto_Payload>, I>>(base?: I): EmitEventDto_Payload {
    return EmitEventDto_Payload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmitEventDto_Payload>, I>>(object: I): EmitEventDto_Payload {
    const message = createBaseEmitEventDto_Payload();
    message.mail = (object.mail !== undefined && object.mail !== null)
      ? SendMailDto.fromPartial(object.mail)
      : undefined;
    return message;
  },
};

function createBaseEmitEventResult(): EmitEventResult {
  return { code: 0, message: "" };
}

export const EmitEventResult = {
  encode(message: EmitEventResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmitEventResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmitEventResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmitEventResult {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: EmitEventResult): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EmitEventResult>, I>>(base?: I): EmitEventResult {
    return EmitEventResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmitEventResult>, I>>(object: I): EmitEventResult {
    const message = createBaseEmitEventResult();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

export interface IEventController {
  Create(request: CreateEventDto): Promise<IEvent>;
  Get(request: GetEventDto): Promise<IEvent>;
  Emit(request: EmitEventDto): Promise<EmitEventResult>;
}

export const IEventControllerServiceName = "event.IEventController";
export class IEventControllerClientImpl implements IEventController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || IEventControllerServiceName;
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Get = this.Get.bind(this);
    this.Emit = this.Emit.bind(this);
  }
  Create(request: CreateEventDto): Promise<IEvent> {
    const data = CreateEventDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => IEvent.decode(_m0.Reader.create(data)));
  }

  Get(request: GetEventDto): Promise<IEvent> {
    const data = GetEventDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Get", data);
    return promise.then((data) => IEvent.decode(_m0.Reader.create(data)));
  }

  Emit(request: EmitEventDto): Promise<EmitEventResult> {
    const data = EmitEventDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Emit", data);
    return promise.then((data) => EmitEventResult.decode(_m0.Reader.create(data)));
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
