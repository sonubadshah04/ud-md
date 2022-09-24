function handler(m) {
  
  const kontak = {
	"displayName": 'My Owner Sonu',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('447513266106@s.whatsapp.net')}\nitem1.TEL;waid=447513266106:447513266106\nitem1.X-ABLabel:save-me.\nURL;My Web: https://github.com/sonubadshah04\nEMAIL;Email Owner: shehzadishehzada60@gamil.com\nORG: NOT A BOT +SAVE ME\nTEL;My number ;waid=17788888838:17788888838\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
