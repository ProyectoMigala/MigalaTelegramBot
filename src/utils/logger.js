'use strict'

exports.info = (msg) => {
  if (process.env.LOG_ENABLE === 'enabled') {
    console.log(`├ [ INFO ] ${msg}`)
  }
}
