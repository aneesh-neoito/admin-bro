"use strict";

const env = ['production', 'qa', 'staging'].indexOf(process.env.NODE_ENV) > -1 ? 'production' : 'development';
module.exports = env;