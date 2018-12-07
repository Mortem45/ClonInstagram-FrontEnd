const axios = require('axios')

 async function loadAuth (ctx, next) {
  try {
    console.log("entre a la funcion :)");

    let whoami = await axios.get('/whoami').then(res => res.data)
    if (whoami.username) {
      console.log(whoami)
      ctx.auth = whoami
    } else {
      ctx.auth = false
      console.log('no hay usuario :(');
      console.log(whoami)

    }
    next()
  } catch (error) {
    console.log(error)
  }
}

exports.loadAuth = loadAuth