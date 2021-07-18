const ws = require("ws");
const wss = new ws.Server({ port: 8080 });

let position = {
  x: 200,
  y: 200,
};

wss.on("connection", (ws) => {
  onConnection(ws);
  ws.on("open", (open) => {
    console.log("were open for bizness");
  });
  ws.on("message", (message) => {
    onMessage(message, ws);
  });
  ws.on("error", (error) => {
    OnError(error);
  });
  ws.on("close", (ws) => {
    onClose();
  });
});
