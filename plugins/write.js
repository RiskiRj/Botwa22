let fs = require('fs')
let handler = async(m, { conn, usedPrefix, args, command }) => {
    let teks = `
┌〔 List Write 〕
├ document
├ text
└────
`.trim()
    if (!args[0]) throw teks
    if (args[0] === 'document') {
        if(!args[1]) throw `Contoh: ${usedPrefix + command} document plugins/haruno.js`
        let saveas = await m.quoted.download()
        fs.writeFileSync(`./${args[1]}`, saveas)
        conn.sendButton(m.chat, `Berhasil tersimpan sebagai ${args[1]}.`, watermark, 'Debounce', '.debounce')
    } else if (args[0] === 'text') {
        if (!args[1]) throw `Masukkan nama dan tujuan file.\n${usedPrefix + command} plugins/join.js`
        require('fs').writeFileSync(`./${args[1]}`, m.quoted.text)
        conn.sendButton(m.chat, `Berhasil tersimpan sebagai ${args[1]}.`, watermark, 'Debounce', '.debounce')
    } else {
        throw teks
    }
}
handler.command = /^write$/i
handler.owner = true
module.exports = handler