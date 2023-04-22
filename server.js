const express = require("express");

const server = express();
server.get("/heartbeat", function (req, res) {
    res.json({
        "is": "working"
    })
});

server.listen(8080, () => console.log("listening on port 8080."));
