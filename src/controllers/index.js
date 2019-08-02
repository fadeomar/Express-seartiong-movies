const express = require('express');

const { search } = require('./search');

const { client, server } = require('./errors');

const { homepage } = require('./home');

const router = express.Router();

router.post( '/search', search );

router.get( '/' , homepage )

router.use( server );

router.use( client );

module.exports = router;
