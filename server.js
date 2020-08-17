// module imports
const express = require('express');
// const logger = require('./middleware/logger')
const helmet = require('helmet');

// file imports
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const server = express();

// global middleware
server.use(express.json());
server.use(helmet());
server.use("/api/posts", logger, postRouter);
server.use("/api/users", logger,  userRouter);


server.get('/', logger, (req, res) => {
  res.send(`<h2>Middleware</h2>`);
});

//logger middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} endpoint.`);
  next();
};

module.exports = server;