'use strict'
const services = require('../../../services')

const linktree = process.env.LINKTREE_URL

// Linktree Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = 'Enlace a Linktree'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Link3',
            url: linktree
          },
        ],
        [
          {
            text: 'Regresar',
            callback_data: 'Regresar'
          },
        ],
      ]
    }
  }

  await ctx.editMessageCaption(caption, options)
}
