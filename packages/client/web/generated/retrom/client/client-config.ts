// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.1
// source: retrom/client/client-config.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "retrom";

export interface RetromClientConfig {
  server?: RetromClientConfig_Server | undefined;
}

export interface RetromClientConfig_Server {
  hostname: string;
  port?: number | undefined;
}

function createBaseRetromClientConfig(): RetromClientConfig {
  return { server: undefined };
}

export const RetromClientConfig = {
  encode(message: RetromClientConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.server !== undefined) {
      RetromClientConfig_Server.encode(message.server, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetromClientConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetromClientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.server = RetromClientConfig_Server.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RetromClientConfig>): RetromClientConfig {
    return RetromClientConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RetromClientConfig>): RetromClientConfig {
    const message = createBaseRetromClientConfig();
    message.server = (object.server !== undefined && object.server !== null)
      ? RetromClientConfig_Server.fromPartial(object.server)
      : undefined;
    return message;
  },
};

function createBaseRetromClientConfig_Server(): RetromClientConfig_Server {
  return { hostname: "", port: undefined };
}

export const RetromClientConfig_Server = {
  encode(message: RetromClientConfig_Server, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    if (message.port !== undefined) {
      writer.uint32(16).int32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetromClientConfig_Server {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetromClientConfig_Server();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RetromClientConfig_Server>): RetromClientConfig_Server {
    return RetromClientConfig_Server.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RetromClientConfig_Server>): RetromClientConfig_Server {
    const message = createBaseRetromClientConfig_Server();
    message.hostname = object.hostname ?? "";
    message.port = object.port ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
