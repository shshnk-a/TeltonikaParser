"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProtocolParser_1 = require("./ProtocolParser");
let packet = '00000000000000338e0100000180a865e620000000000000000000000000000000000000000100000000000000010384111111111111111100000100009b69';
let parsed = new ProtocolParser_1.ProtocolParser(packet, false, (e) => { throw e; });
console.log(JSON.stringify(parsed));
if (parsed.CodecType == "data sending") {
    let data = parsed.Content;
}
else {
    let gprs = parsed.Content;
}
