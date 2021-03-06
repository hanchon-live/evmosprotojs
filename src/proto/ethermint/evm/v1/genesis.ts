/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: ethermint/evm/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 *  */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./evm";
import * as pb_1 from "google-protobuf";
export namespace ethermint.evm.v1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            accounts?: GenesisAccount[];
            params?: dependency_2.ethermint.evm.v1.Params;
            txs_logs?: dependency_2.ethermint.evm.v1.TransactionLogs[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 4], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("accounts" in data && data.accounts != undefined) {
                    this.accounts = data.accounts;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("txs_logs" in data && data.txs_logs != undefined) {
                    this.txs_logs = data.txs_logs;
                }
            }
        }
        get accounts() {
            return pb_1.Message.getRepeatedWrapperField(this, GenesisAccount, 1) as GenesisAccount[];
        }
        set accounts(value: GenesisAccount[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.ethermint.evm.v1.Params, 3) as dependency_2.ethermint.evm.v1.Params;
        }
        set params(value: dependency_2.ethermint.evm.v1.Params) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get txs_logs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ethermint.evm.v1.TransactionLogs, 4) as dependency_2.ethermint.evm.v1.TransactionLogs[];
        }
        set txs_logs(value: dependency_2.ethermint.evm.v1.TransactionLogs[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            accounts?: ReturnType<typeof GenesisAccount.prototype.toObject>[];
            params?: ReturnType<typeof dependency_2.ethermint.evm.v1.Params.prototype.toObject>;
            txs_logs?: ReturnType<typeof dependency_2.ethermint.evm.v1.TransactionLogs.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.accounts != null) {
                message.accounts = data.accounts.map(item => GenesisAccount.fromObject(item));
            }
            if (data.params != null) {
                message.params = dependency_2.ethermint.evm.v1.Params.fromObject(data.params);
            }
            if (data.txs_logs != null) {
                message.txs_logs = data.txs_logs.map(item => dependency_2.ethermint.evm.v1.TransactionLogs.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                accounts?: ReturnType<typeof GenesisAccount.prototype.toObject>[];
                params?: ReturnType<typeof dependency_2.ethermint.evm.v1.Params.prototype.toObject>;
                txs_logs?: ReturnType<typeof dependency_2.ethermint.evm.v1.TransactionLogs.prototype.toObject>[];
            } = {};
            if (this.accounts != null) {
                data.accounts = this.accounts.map((item: GenesisAccount) => item.toObject());
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.txs_logs != null) {
                data.txs_logs = this.txs_logs.map((item: dependency_2.ethermint.evm.v1.TransactionLogs) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.accounts !== undefined)
                writer.writeRepeatedMessage(1, this.accounts, (item: GenesisAccount) => item.serialize(writer));
            if (this.params !== undefined)
                writer.writeMessage(3, this.params, () => this.params.serialize(writer));
            if (this.txs_logs !== undefined)
                writer.writeRepeatedMessage(4, this.txs_logs, (item: dependency_2.ethermint.evm.v1.TransactionLogs) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.accounts, () => pb_1.Message.addToRepeatedWrapperField(message, 1, GenesisAccount.deserialize(reader), GenesisAccount));
                        break;
                    case 3:
                        reader.readMessage(message.params, () => message.params = dependency_2.ethermint.evm.v1.Params.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.txs_logs, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.ethermint.evm.v1.TransactionLogs.deserialize(reader), dependency_2.ethermint.evm.v1.TransactionLogs));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
    export class GenesisAccount extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            code?: string;
            storage?: dependency_2.ethermint.evm.v1.State[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("code" in data && data.code != undefined) {
                    this.code = data.code;
                }
                if ("storage" in data && data.storage != undefined) {
                    this.storage = data.storage;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get code() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set code(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get storage() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ethermint.evm.v1.State, 3) as dependency_2.ethermint.evm.v1.State[];
        }
        set storage(value: dependency_2.ethermint.evm.v1.State[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            address?: string;
            code?: string;
            storage?: ReturnType<typeof dependency_2.ethermint.evm.v1.State.prototype.toObject>[];
        }) {
            const message = new GenesisAccount({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.code != null) {
                message.code = data.code;
            }
            if (data.storage != null) {
                message.storage = data.storage.map(item => dependency_2.ethermint.evm.v1.State.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                code?: string;
                storage?: ReturnType<typeof dependency_2.ethermint.evm.v1.State.prototype.toObject>[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.code != null) {
                data.code = this.code;
            }
            if (this.storage != null) {
                data.storage = this.storage.map((item: dependency_2.ethermint.evm.v1.State) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (typeof this.code === "string" && this.code.length)
                writer.writeString(2, this.code);
            if (this.storage !== undefined)
                writer.writeRepeatedMessage(3, this.storage, (item: dependency_2.ethermint.evm.v1.State) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        message.code = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.storage, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.ethermint.evm.v1.State.deserialize(reader), dependency_2.ethermint.evm.v1.State));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisAccount {
            return GenesisAccount.deserialize(bytes);
        }
    }
}
