const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const filmesRouter = require('./routes/filmes');

app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('/filmes', filmesRouter);


app.listen(process.env.PORT || 4000);