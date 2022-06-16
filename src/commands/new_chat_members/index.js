'use strict'

const telegram_base_url = 'https://telegram.me'

// New Chat Members Command
module.exports = async (ctx) => {
  const new_chat_members = ctx.update.message.new_chat_members

  let is_not_a_bot = new_chat_members.some((member) => {
    return member.is_bot === false
  })

  let ops = {
    reply_to_message_id: ctx.update.message.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Iniciar', url: `${telegram_base_url}/${ctx.botInfo.username}` }
        ]
      ]
    }
  }

  if (is_not_a_bot) {
    ctx.replyWithMarkdown(`Hola! Soy el Bot @${ctx.botInfo.username}, Tengo toda la información relacionada con el Proyecto, haz Click en [Iniciar](${telegram_base_url}/${ctx.botInfo.username})`, ops)
  }
}
