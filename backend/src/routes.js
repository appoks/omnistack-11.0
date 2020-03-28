const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('../database/connection');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const AuthController = require('./controllers/AuthController')

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/login', AuthController.login);

module.exports = routes;