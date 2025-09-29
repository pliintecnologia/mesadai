
const express = require('express');
const path = require('path');
const app = express();
const sendMail = require('./mailer');

const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta theme
app.use(express.static(path.join(__dirname, 'theme')));

// Redireciona / para /index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'theme', 'index.html'));
});

app.post('/api/send-email', async (req, res) => {
  const { to, subject, message } = req.body;
  if (to && subject && message) {
    try {
      await sendMail({ to, subject, text: message });
      res.json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Erro ao enviar e-mail.', error: err.message });
    }
  } else {
    res.status(400).json({ success: false, message: 'Dados incompletos.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
