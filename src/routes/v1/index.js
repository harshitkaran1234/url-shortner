const express = require('express');

const { InfoController, UrlController } = require('../../controllers');

const router = express.Router();

router.get('/info', InfoController.info);
router.post('/register-url', UrlController.registerUrl);
router.get('/get-url', UrlController.getUrl);

module.exports = router;