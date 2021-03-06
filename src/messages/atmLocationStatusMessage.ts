import { messageBuilder } from "./messageBuilder";
import { Packet } from "mosca";
import { messageTypes } from "../defines/messageTypes";
import * as mongoose from "mongoose";

export class atmLocationStatusMessage {
    public locations: mongoose.Document[];
    constructor(locations: mongoose.Document[]) {
        this.locations = locations;
    }

    public createMessage(topic: string, retain: boolean, qos: number, clientId: string) : Packet {
        var builder = new messageBuilder(this);
        var message = builder.buildPacket(topic, retain, qos, clientId, messageTypes.atmLocationStatusReply);
        return message;
    }
}