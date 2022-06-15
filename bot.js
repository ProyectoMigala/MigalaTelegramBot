'use strict'
const { Telegraf } = require('telegraf')

// Import commands
const commands = require('./src/commands')

// Token Validation
if (process.env.TELEGRAM_BOT_TOKEN === undefined || process.env.TELEGRAM_BOT_TOKEN === '') {
  console.log("=== BOT TOKEN CANNOT BE EMPTY ===")
  process.exit(1)
}

// Bot Initialization
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

/**
 * Commands
 */
bot.on("new_chat_members", async (ctx) => {
  await commands.new_chat_members(ctx)
})

module.exports = bot
