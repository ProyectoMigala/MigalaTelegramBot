'use strict'

// New Chat Members Command
module.exports = async (ctx) => {
  const chat_id = ctx.update.message.chat.id
  const new_chat_members = ctx.update.message.new_chat_members
  console.log(new_chat_members)

  let is_not_a_bot = new_chat_members.some((member) => {
    return member.is_bot === false
  })

  if (is_not_a_bot) {
    ctx.telegram.sendMessage(chat_id, `Bienvenidx a ${ctx.update.message.chat.title}!`)
  }
}
