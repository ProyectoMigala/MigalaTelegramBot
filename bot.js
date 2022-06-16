'use strict'
const { Telegraf } = require('telegraf')

// Import commands
const commands = require('./src/commands')

// Import logger
const logger = require('./src/utils/logger')

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
  logger.info(`New Chat Member: ${ctx.update.message.new_chat_members[0].first_name}`)
})

bot.command('start', async (ctx) => {
  await commands.help_and_start(ctx)
  logger.info(`Start Command: ${ctx.update.message.from.first_name}`)
})

bot.command('help', async (ctx) => {
  await commands.help_and_start(ctx)
  logger.info(`Help Command: ${ctx.update.message.from.first_name}`)
})

module.exports = bot
