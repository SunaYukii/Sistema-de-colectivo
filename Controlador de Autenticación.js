exports.register = (req, res) => {
    // Lógica para crear una cuenta
    const { name, email, password } = req.body;
    // Aquí se puede agregar validación y almacenamiento en base de datos
    res.send('Usuario registrado');
  };
  
  exports.login = (req, res) => {
    // Lógica para iniciar sesión
    const { email, password } = req.body;
    // Aquí se puede agregar autenticación
    res.send('Usuario autenticado');
  };
  
