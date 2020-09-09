// We import packages in commonjs like so

const express = require("express");
const bodyparser = require("body-parser");
const next = require("next");

/*
 we check nodejs' environmental
 variable to see wether
 we are in proudction or
 development mode
 */
const dev = process.env.NODE_ENV !== "production";

/*
We initialize our next
application passing
an object containing
that our NODE_ENV value
*/
const app = next({ dev });

/*
Everything that happens in express has to pass
through nextjs as well, this way
 next can preform server side operations.
 We create such handler to handle all incoming requests.
*/
const handle = app.getRequestHandler();

/*
We make sure nextjs is up an
running and THEN we work
with initializing our express server
*/
app.prepare().then(() => {
  // initialize our express server
  const server = express();

  // choose where to server locally
  // if the default port is taken then we assign in 5000
  const PORT = process.env.PORT || 5000;

  // we tell our server with what type of data we will be sending and recieving:

  // form data
  server.use(bodyparser.urlencoded({ extended: false }));
  // json data
  server.use(bodyparser.json({ limit: "50mb" }));

  /* if our URL matches this route then
  we tell the server to send
   some data to the client. We will later
   create more routes elsewhere and import them
   all here.
   */
  server.use("/hello", (req, res) => {
    /*
     req stands for request and contains a couple of
     parameters that are passed trough the url
     res stands for response and is used to
     send responses to the client
     we are sending an OBJECT that contains a field
     'msg', it's values is a string.
     This object is paresed by the json() funcion in res.
     */
    res.json({ msg: "hello" });
  });

  // We let nextjs handle all incoming requests the "*" is regex for "all"
  server.get("*", (req, res) => handle(req, res));

  // We tell our server to serve our app to the selected port
  server.listen(PORT, (err) => {
    if (err) throw err;

    // the yellow line indicates that logging is only for
    // debugging purposes and should never be part
    // of deployment
    console.log(` The app is running on port: ${PORT}`);
  });
});