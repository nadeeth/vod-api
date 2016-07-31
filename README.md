# VOD API
REST API for VOD app.

## Installation

1. Clone this [repository](https://github.com/nadeeth/vod-api.git) or download the [latest build](https://github.com/nadeeth/vod-api/archive/master.zip).
2. Run the command "npm install" to install all the dependencies.
3. Edit "config.js" and set MongoDB connection string.
4. Run the command "npm start" to start server.

To run the server in development mode "DEBUG=weasel:* npm run-script devstart" or in Windows "set DEBUG=weasel:* & npm run-script devstart". Development mode uses Nodemon to run the server (Nodemon restarts the server when you edit and save files).

## Example routes, models and tests.

There are few example routes (Actions) in the routes directory for user authentication, populate some test data, etc.

And the test directory contains a sample API level test and the test config file. In the test config file you can have different configurations for testing (ex: A separate database for testing etc.). You can run this sample test with the command given below.

    mocha test/api.test.js


