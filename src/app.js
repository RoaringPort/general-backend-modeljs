import express from 'express';
const app = express();

app.set('port', process.env.PORT || 8800);

app.get('/', (req, res) => res.send({
    message: "Hello Express!!"
}));

export default app;
