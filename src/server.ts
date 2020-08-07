import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  
})

app.listen(3333, () => {
  console.log('Server rodando na porta 3333');
});