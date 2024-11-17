const express = require('express');
const path = require('path');
const routes = express.Router();
const contactController = require('../controller/contact-us');


routes.get('/contact-us', contactController.getcontactus);

routes.post('/contact-us',contactController.postcontactus);

routes.get('/success', contactController.getsuccess)

module.exports = routes;