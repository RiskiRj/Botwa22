let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  if (!m.mentionedJid[0]) throw `tag yang mau dikick`
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}
handler.help = ['kick', '-'].map(v => 'o' + v + ' [@62XXXX]')
handler.tags = ['owner']
handler.command = /^(okick|o\-)$/i
handler.owner = true
handler.group = true
handler.admin = false
handler.botAdmin = true
module.exports = handler
