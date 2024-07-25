// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.1
// source: models/games.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "retrom";

export interface Game {
  id: number;
  path: string;
  platformId?: number | undefined;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface NewGame {
  path: string;
  platformId?: number | undefined;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface UpdatedGame {
  id: number;
  path?: string | undefined;
  platformId?: number | undefined;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

function createBaseGame(): Game {
  return { id: 0, path: "", platformId: undefined, createdAt: undefined, updatedAt: undefined };
}

export const Game = {
  encode(message: Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.platformId !== undefined) {
      writer.uint32(32).int32(message.platformId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Game {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.platformId = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Game>): Game {
    return Game.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Game>): Game {
    const message = createBaseGame();
    message.id = object.id ?? 0;
    message.path = object.path ?? "";
    message.platformId = object.platformId ?? undefined;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseNewGame(): NewGame {
  return { path: "", platformId: undefined, createdAt: undefined, updatedAt: undefined };
}

export const NewGame = {
  encode(message: NewGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.platformId !== undefined) {
      writer.uint32(16).int32(message.platformId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.platformId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NewGame>): NewGame {
    return NewGame.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NewGame>): NewGame {
    const message = createBaseNewGame();
    message.path = object.path ?? "";
    message.platformId = object.platformId ?? undefined;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseUpdatedGame(): UpdatedGame {
  return { id: 0, path: undefined, platformId: undefined, createdAt: undefined, updatedAt: undefined };
}

export const UpdatedGame = {
  encode(message: UpdatedGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.path !== undefined) {
      writer.uint32(18).string(message.path);
    }
    if (message.platformId !== undefined) {
      writer.uint32(24).int32(message.platformId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.platformId = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdatedGame>): UpdatedGame {
    return UpdatedGame.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatedGame>): UpdatedGame {
    const message = createBaseUpdatedGame();
    message.id = object.id ?? 0;
    message.path = object.path ?? undefined;
    message.platformId = object.platformId ?? undefined;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
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
