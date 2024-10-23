const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Importar Rutas
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');

// Usar Rutas
app.use('/auth', authRoutes);
app.use('/tickets', ticketRoutes);

// Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
