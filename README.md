# Video Storage Microservice

The Video Storage microservice is a Node.js application that enables streaming videos from an AWS S3 storage. It provides a convenient way to retrieve video files from the S3 bucket through a simple HTTP interface.

## Features

- Retrieve videos based on the provided video path.
- Support for streaming video files in the MP4 format.
- Automatically sets the appropriate Content-Type header for video streaming.
- Uses AWS SDK to interact with the S3 service.
- Easy setup and deployment.

## Prerequisites

To run the Video Storage microservice, ensure you have the following prerequisites installed on your system:

- Node.js (version 12 or higher)
- AWS SDK (installed as a dependency)

## Installation

To install and set up the Video Storage microservice, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-storage-microservice.git
2. Navigate to the project directory:
   ```bash
   cd video-storage-microservice
3. Install the dependencies:
   ```bash
   npm install
   
4. Set up the environment variables:

- Create a .env file in the project's root directory
- Add the following environment variables to the .env file:
  ```bash
  PORT= <port-number>
  AWS_ACCESS_KEY_ID= <your-access-key-id>
  AWS_SECRET_ACCESS_KEY= <your-secret-access-key>
  AWS_REGION= <your-aws-region>
  S3_BUCKET_NAME= <your-s3-bucket-name>
  
 Replace the placeholders with your desired values:

- <port-number> The port on which the microservice will listen (e.g., 3000)
- <your-access-key-id> and <your-secret-access-key> Your AWS access credentials
- <your-aws-region> The AWS region where your S3 bucket is located (e.g., us-east-1)
- <your-s3-bucket-name> The name of your S3 bucket where the video files are stored
## Usage
To start the Video Storage microservice, run the following command:
 ```bash 
 npm start
 - The microservice will start listening on the specified port, and you can access it via http://localhost:<port-number>.
 To stream a video, make a GET request to the /video endpoint with the path query parameter specifying the video path within the S3 bucket:

  
  
