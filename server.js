
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta theme
app.use(express.static(path.join(__dirname, 'theme')));

// Redireciona / para /index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'theme', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
