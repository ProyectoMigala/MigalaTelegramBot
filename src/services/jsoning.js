'use strict'

const jsoning = require('jsoning')
const db = new jsoning(`${process.cwd()}/json/${process.env.DB_Name}.json`)

exports.add = async (user, activity) => {
  let data = db.get(user)
 
  if (data === undefined || data === null) {
    data = {}
  }

  if (data[activity] === undefined) {
    data[activity] = 1
  } else {
    data[activity] = data[activity] + 1
  }

  await db.set(user, data)
}
