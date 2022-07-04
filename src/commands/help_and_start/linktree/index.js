'use strict'

const linktree = process.env.LINKTREE_URL

// Linktree Command
module.exports = async (ctx) => {

  let caption = 'Enlace a Linktree'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Linktree',
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
