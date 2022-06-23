'use strict'

exports.info = (msg) => {
  if (process.env.LOG_ENABLE) {
    console.log(process.env.LOG_ENABLE)
    console.log(`├ [ INFO ] ${msg}`)
  }
}
