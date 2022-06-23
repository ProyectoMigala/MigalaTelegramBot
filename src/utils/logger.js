'use strict'

exports.info = (msg) => {
  if (process.env.LOG_ENABLE === true) {
    console.log(`├ [ INFO ] ${msg}`)
  }
}
