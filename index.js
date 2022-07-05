'use strict'
require('dotenv').config()
const os = require('os')
const bot = require('./bot')

// Start Bot
bot.launch()

// Bot Info (for debug)
bot.telegram.getMe().then((getme) => {
  console.log(' ====================================================')
  console.log(' │ + Bot Name : ' + getme.first_name || '')
  console.log(' │ + Host     : ' + os.hostname() || '')
  console.log(' │ + Platfrom : ' + os.platform() || '')
  console.log(' ====================================================')
  console.log('╭─── [ LOG ]')
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
