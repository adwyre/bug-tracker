const express = require('express');
const apiRouter = express.Router();

module.exports = apiRouter;

//require routers
const usersRouter = require('./routes/users');
const casesRouter = require('./routes/cases');
const projectsRouter = require('./routes/projects');
const historiesRouter = require('./routes/histories');

//mount routers
apiRouter.use('/users', usersRouter);
apiRouter.use('/cases', casesRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/histories', historiesRouter);