const express = require("express");
const s3 = require("aws-sdk/clients/s3");

const app = express();

////
// Throws an error if PORT environment variable is missing.
//

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

//
// Extracts environment variables to globals for convenience.
//

const PORT = process.env.PORT;

console.log(`Serving videos from s3 storage.`);

//
// Registers a HTTP GET route to retrieve videos from storage.
//

app.get("/video", (req, res) => {

    const videoPath = req.query.path;
    console.log(`hi Streaming video from path ${videoPath}.`);

    s3_client = new s3({
        //console.log("this is excuting"),
        apiVersion: '2006-03-01',
        region: 'ap-south-1'
    });

    s3_client.headObject({Key: `${videoPath}`, Bucket: 'video-storage143'}, (err, data) => { // Sends a HTTP HEAD request to retreive video size.
        if (err) {
            console.error(`Error occurred getting properties for video ${videoPath}.`);
            console.error(err && err.stack || err);
            res.sendStatus(500);
            return;
        }

        //
        // Writes HTTP headers to the response.
        //

        res.writeHead(200, {
            //"Content-Length": data.contentLength,
            "Content-Type": "video/mp4",
        });

        //
        // Streams the video from s3 storage to the response.
        //

        s3_client.getObject({
            Bucket: 'video-storage143', 
            Key: `${videoPath}`
        }).createReadStream().pipe(res);
    });
    console.log("video has sent to video-streaming ");
});

//
// Starts the HTTP server.
//
app.listen(PORT, () => {
    console.log(`Microservice online`);
});
