'use strict'
require('dotenv').config()
const bot = require('./bot')

// Start Bot
bot.launch()

// Bot Info (for debug)
bot.telegram.getMe().then((getme) => {
  let itsPrefix = "No Prefix"
  console.log(' ====================================================')
  console.log(` │ + Bot Name : ${getme.first_name || ""}`)
  console.log(` │ + Prefix : ${itsPrefix}`)
  console.log(' ====================================================')
  console.log('╭─── [ LOG ]')
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
