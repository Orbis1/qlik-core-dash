const { connectSession, qAsk, qAskReply } = require("rxq");

const config = {
    host: "localhost",
    port: 19076,
};

// Engine session
const session = connectSession(config);

const global$ = session.global$;

global$.pipe(qAsk("EngineVersion")).subscribe(console.log);
