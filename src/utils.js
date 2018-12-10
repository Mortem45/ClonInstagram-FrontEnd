const axios = require('axios')

 async function loadAuth (ctx, next) {
  try {
    let whoami = await axios.get('/whoami').then(res => res.data)
    if (whoami.username) {
      ctx.auth = whoami
    } else {
      ctx.auth = false
    }
    next()
  } catch (error) {
    console.log(error)
  }
}

exports.loadAuth = loadAuth
