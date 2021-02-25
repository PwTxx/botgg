const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `「 *GG BOT* 」
◪ *INFO DEVELOPER*
  ❏ Nama: Tiago
  ❏ Wa: wa.me/553398091185
  ❏ Ig: https://instagram.com/tiago.lve
  ----------------------------------
◪ *INFORMAÇÃO GG*
  ❏ Nome: GG
  ----------------------------------
◪ *SUA INFORMAÇÃO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nome: ${pushname}
  ❏ O teu dinheiro : Rp${uangku}
  ❏ Número: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Nível: ${getLevelingLevel(sender)}
  ❏ Registro do usuário : ${_registered.length}
  
◪ *INFO*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}reportar
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}comprarpremium
  ├─ ❏ ${prefix}ganharpremium
  ├─ ❏ ${prefix}menupict
  └─ ❏ ${prefix}menuowner
  
◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}hartatata
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}imgmaker
  
  
◪ *OUTRAS CARACTERÍSTICAS*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}wiki [texto]
  ├─ ❏ ${prefix}kbbi [texto]
  ├─ ❏ ${prefix}map [texto]
  ├─ ❏ ${prefix}calc
  ├─ ❏ ${prefix}lirik [texto]
  ├─ ❏ ${prefix}brainly [texto]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [texto]
  
  
◪ *BAIXAR*
  │
  ├─ ❏ ${prefix}pinterest [texto]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}baixarmp4 [link]
  ├─ ❏ ${prefix}play [texto]
  ├─ ❏ ${prefix}play2 [texto]
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox [texto]
  
◪ *MEME*◪
  │
  ├─ ❏ ${prefix}meme
  
◪ *ANIME*◪
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
  │ *KPOP*
  ├─ ❏ ${prefix}randomkpop
  │
  │ *DESENHO ANIMADO*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
  │

◪ *LIMITE & MONEY*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GROUP*
  │
  ├─ ❏ ${prefix}promover [@tag]
  ├─ ❏ ${prefix}rebaixar [@tag]
  ├─ ❏ ${prefix}marcar
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grupolist
  ├─ ❏ ${prefix}add [55]
  ├─ ❏ ${prefix}banir [@tag]
  ├─ ❏ ${prefix}mudarnome
  ├─ ❏ ${prefix}mudardesc
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgp
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grupo [abrir/fechar)
  ├─ ❏ ${prefix}bemvindo [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
  
◪ *SOUND*
  │
  └─ ❏ ${prefix}gtts
  
  
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
  
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  └─ ❏ ${prefix}wait
  
◪ *APK*
  ├─ ❏ ${prefix}apkpure [texto]
  ├─ ❏ ${prefix}happymod [texto]
  ├─ ❏ ${prefix}moddroid [texto]
  
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob
  ├─ ❏ ${prefix}randomhentai
  └─ ❏ ${prefix}nsfwneko
  
◪ *FUN*
  │
  └─ ❏ ${prefix}simi
  
◪ *INFORMAÇÃO*
  │
  ├─ ❏ ${prefix}cdidioma
  ├─ ❏ ${prefix}cdpaís
  ├─ ❏ ${prefix}infoterremoto
  ├─ ❏ ${prefix}infonumero
  
◪ *DONO*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
  
◪ *POWERED BY TIAGO*
`
}
exports.help = help



  
