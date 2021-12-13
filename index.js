const express = require('express');
const app = express();
const port = 3000;
const videoStream = require('raspberrypi-node-camera-web-streamer/videoStream');
videoStream.acceptConnections(app, {
    width: 1280,
    height: 720,
    fps: 24,
    encoding: 'JPEG',
    quality: 6 //lower is faster
}, '/stream.mjpg', false /*verbose*/);

app.listen(3000, () => console.log(`Listening on port ${port}!`));