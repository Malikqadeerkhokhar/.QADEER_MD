const settings = require('../settings');

async function ownerCommand(sock, from, msg) {

    const ownerText =
`╭━━━〔 ☠️ 𝐎𝐖𝐍𝐄𝐑 𝐏𝐀𝐍𝐄𝐋 ☠️ 〕━━━╮

👤 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 :
⚡ ${settings.ownerName}

📱 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 :
🔥 +${settings.ownerNumber}

🖤 𝐒𝐘𝐒𝐓𝐄𝐌 :
⚡ 𝐀𝐖𝐀𝐈𝐒 𝐂𝐘𝐁𝐄𝐑 𝐁𝐎𝐓

🔗 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 :
> https://whatsapp.com/channel/0029VbBzlMlIt5rzSeMBE922

╰━━━━━━━━━━━━━━━━╯

☠️ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘
⚡ 𝐀𝐖𝐀𝐈𝐒 𝐂𝐘𝐁𝐄𝐑 𝐆𝐀𝐍𝐆`;

    await sock.sendMessage(
        from,
        { text: ownerText },
        { quoted: msg }
    );
}

module.exports = ownerCommand;