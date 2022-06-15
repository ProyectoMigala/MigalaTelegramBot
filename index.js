'use strict'
require('dotenv').config()
const { Telegraf } = require('telegraf')

const commands = require('./src/commands')

if (process.env.TELEGRAM_BOT_TOKEN === undefined || process.env.TELEGRAM_BOT_TOKEN === '') {
  console.log("=== BOT TOKEN CANNOT BE EMPTY ===")
  process.exit(1)
}

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.on("new_chat_members", async (ctx) => {
  await commands.new_chat_members(ctx)
})

bot.launch()
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
