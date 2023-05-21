const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API'
    }, 
    host: 'https://cse341-5zah.onrender.com',
    // host: 'localhost:8801',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);