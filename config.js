'use strict'

const config = {
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  client: {
    endpoints: {
      pictures: 'http://api.cloninstagram.com/picture',
      user: 'http://api.cloninstagram.com/user',
      auth: 'http://api.cloninstagram.com/auth',
    }
  },
  secret: process.env.CLONINSTAGRAM_SECRET || 'cloninstagram'
}

if (process.env.NODE_ENV !== 'production') {
  config.client.endpoints = {
    pictures: 'http://localhost:5000',
    users: 'http://localhost:5001',
    auth: 'http://localhost:5002'
  }
}

module.exports = config;