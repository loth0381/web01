const path = require('path');

module.exports = {
  // Agregar configuraciones personalizadas aquí, si es necesario

  // Configuración de alias para rutas de importación
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
