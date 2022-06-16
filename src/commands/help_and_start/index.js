'use strict'

const linktree_url = process.env.LINKTREE_URL
const actividades_ya_ejecutadas = process.env.ACTIVIDAD_YA_EJECUTADA
const actividades_actuales = process.env.ACTIVIDAD_ACTUAL
const actividades_futuras = process.env.ACTIVIDAD_FUTURA
const encargados_de_los_roles = process.env.ENCARGADOS_DE_LOS_ROLES
const text = process.env.MENU_TEXT

// Default Command (Shows a Message and Buttons Menu)
module.exports = async (ctx) => {

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Actividad Actual', url: actividades_actuales },
          { text: 'Actividad Futura', url: actividades_futuras }
        ],
        [
          { text: 'Actividades ya Ejecutadas', url: actividades_ya_ejecutadas },
        ],
        [
          { text: 'Encargados de los Roles Actuales', url: encargados_de_los_roles }
        ],
        [
          { text: 'Linktree', url: linktree_url },
        ],
      ]
    }
  }

  try {
    await ctx.editMessageText(text, options)
  } catch {
    await ctx.reply(text, options)
  }
}
