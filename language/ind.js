exports.wait = () => {
	return`*「 AGUARDE 」 EM PROCESSO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVAR 」 NÍVEL*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 NÍVEL*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 CADASTRO 」*\n\n*Como registrar ${prefix}registrar nome|idade* \n*Exemplp ${prefix}registrar Tiago|18*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*Você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*Bem falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*Desculpe, o link é inválido*`
}

exports.groupo = () => {
	return`*「APENAS EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「APENAS DONO DO BOT」*`
}

exports.ownerg = () => {
	return`*「APENAS DONO DO GRUPO」*`
}

exports.admin = () => {
	return`*「APENAS ADMIN DO BOT」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ DESLIGADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário de Tiago, relatórios falsos ou confusos não serão respondidos.*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*Se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DO CADASTRO 」*\n\nvocê se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : não se esqueça deste número porque é importante!`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
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
  ├─ ❏ ${prefix}loli2
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
  ├─ ❏ ${prefix}randombts
  ├─ ❏ ${prefix}randommexo
  │  
  │
  │   *FOTOS*
  ├─ ❏ ${prefix}fotogame
  ├─ ❏ ${prefix}fotocyberspace
  ├─ ❏ ${prefix}fotoislamic
  ├─ ❏ ${prefix}fotomontanha
  ├─ ❏ ${prefix}ceu
  ├─ ❏ ${prefix}bike
  ├─ ❏ ${prefix}moto
  ├─ ❏ ${prefix}carro
  ├─ ❏ ${prefix}sorvete
  ├─ ❏ ${prefix}visualizar
  ├─ ❏ ${prefix}cozinheiro
  ├─ ❏ ${prefix}palavras
  ├─ ❏ ${prefix}palavrasmotivacionais
  ├─ ❏ ${prefix}vida
 
  │ *DESENHO ANIMADO*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}dog
  ├─ ❏ ${prefix}gato
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}Coelho
  │

◪ *LIMITE & MONEY*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GRUPO*
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
  
◪ *VOZ DO GOOGLE*
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
  ├─ ❏ ${prefix}hentai2
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

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nome : ${pushname}
  ❏ Número : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limite :  +3
  ❏ Classificação :  ${role}
  ❏ Nível : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O limite de hoje aumentou*\n*Contate-Nos* : wa.me/553398091185\n\n*Note : Daremos aleatoriamente de 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTE : Para chegar ao limite. Você pode subir de nível por meio de grupos ou buylimit.
`}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 SALDO 」*\n  ├─ ❏ *Nome* : ${pushname}\n  ├─ ❏ *Número* : ${sender.split("@")[0]}\n  └─ ❏ *Dinheiro* : ${uangkau}
`}
