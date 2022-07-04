'use strict'

module.exports = {
  new_chat_members: require('./new_chat_members'),
  help_and_start: require('./help_and_start'),
  callback_query: {
    linktree: require('./help_and_start/linktree'),
    encargados_de_los_roles: require('./help_and_start/encargados_de_los_roles'),
    actividades_ya_ejecutadas: require('./help_and_start/actividades_ya_ejecutadas'),
    actividades_futuras: require('./help_and_start/actividades_futuras'),
    actividades_actuales: require('./help_and_start/actividades_actuales')
  }
}
