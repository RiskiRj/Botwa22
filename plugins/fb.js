let fetch = require('node-fetch')
const { fbdl } = require('../lib/fbdl')
let handler = async(m, { conn, usedPrefix, args, command }) => {
  if (!args[0]) throw `Masukkan URL Facebook yang ingin di download!\n\nContoh: ${usedPrefix + command} https://www.facebook.com/100009307660961/videos/2850837675236460/`
  let v = await fbdl(args[0])
  m.reply(wait)
  await conn.sendFile(m.chat, v.hasil.link_high, 'fb.mp4', watermark, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.limit = true

module.exports = handler