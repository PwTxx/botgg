const developer = (prefix) => { 
	return `「 *GG BOT* 」
◪ *INFO DEVELOPER*
  ❏ Nome: Tiago
  ❏ Wa: wa.me/553398091185
  ❏ Ig: https://instagram.com/tiago.lve
  ----------------------------------
  ----------------------------------
◪ *INFO ANDA*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ O teu dinheiro : Rp${uangku}
  ❏ Nome: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
  
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  └─ ❏ ${prefix}gcshizuka     
  
◪ *DONO*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setlimit
  ├─ ❏ ${prefix}addlimit
  ├─ ❏ ${prefix}giftlimit
  ├─ ❏ ${prefix}setmemlimit
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}premium
  ├─ ❏ ${prefix}unpremium
  ├─ ❏ ${prefix}admin
  ├─ ❏ ${prefix}unadmin
  ├─ ❏ ${prefix}ban
  ├─ ❏ ${prefix}unban
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *ADMIN*
  │
  ├─ ❏ ${prefix}event
  ├─ ❏ ${prefix}bcc
  ├─ ❏ ${prefix}bann
  ├─ ❏ ${prefix}unbann
  ├─ ❏ ${prefix}blockk
  ├─ ❏ ${prefix}unblockk
  └─ ❏ ${prefix}giftlimit`
}

exports.developer = developer
