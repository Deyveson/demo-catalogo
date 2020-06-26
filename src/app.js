const express = require('express');
const routes = require('./routes/catalogo');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
// const {errors} = require('celebrate')

const API_PORT = process.env.API_PORT || 3000;

const app = express();
app.use(express.json());
// app.use(errors);

const swaggerDefinition = {
    info: {
        title: 'Catalogo',
        version: '1.0.0',
        description: 'Endpoints api catalog'
    },
    host: `localhost:${API_PORT}`,
    bashPath: '/',
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            schem: 'bearer',
            in: 'header'
        }
    }
};

const options = {
    swaggerDefinition,
    apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/swagger-ui.html', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


require('./routes/catalogo')(app);



module.exports = app;