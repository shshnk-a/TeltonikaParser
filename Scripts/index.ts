import { ProtocolParser, GPRS, Data } from "./ProtocolParser"

let packet = '00000000000000338e0100000180a865e620000000000000000000000000000000000000000100000000000000010384111111111111111100000100009b69'

let parsed = new ProtocolParser(packet, false, (e) => {throw e})

console.log(JSON.stringify(parsed))

if (parsed.CodecType == "data sending") {
    let data = parsed.Content as Data
} else {
    let gprs = parsed.Content as GPRS
}