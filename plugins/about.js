/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*🧍🏽‍♂️Hello ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝙸𝚃𝚂 𝙽𝙸𝙼𝙰𝙷-𝙼𝙳 1𝚅*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 𝚁𝚃𝙳 𝙽𝙸𝙼𝙰𝙷²³⁷*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 𝚃𝙷𝙴 𝚁𝚃𝙳²³⁷*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ 𝙱𝚄𝚃 𝙽𝙸𝙼𝙰.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ 𝙽𝙸𝙼𝙰*
*│  ◦* *ᴀɢᴇ➠ ❌*
*│  ◦* *ᴄɪᴛʏ➠ 𝙰𝚅𝙸𝙸𝚂𝚂𝙰𝚆𝙴𝙻𝙻𝙰*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • RTD NIMA-𝖬𝖣－𝖵1 - RTD TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠Lᴏʀᴅ 𝙽𝙸𝙼𝙰²³⁷*
*│  ◦* *▢➠Tʜᴇ 𝚁𝚃𝙳²³⁷*
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚁𝚃𝙳 𝙽𝙸𝙼𝙰
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
