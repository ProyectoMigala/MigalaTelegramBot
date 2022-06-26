'use strict'
const giphy = require('giphy-api')(process.env.GIPHY_TOKEN)

exports.getOneRandomGif = async (str) => {
  let res = await giphy.random({
    tag: str,
    rating: 'y',
    fmt: 'json'
  })

  return res
}
