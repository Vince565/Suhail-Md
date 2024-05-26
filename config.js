const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "08069918096" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08069918096";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_21_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHJRMXpvODh3L1M0bThRbnFHajJPbzlIanFQZWlyWU5sRisxWWJERzRkYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY5OTE4MDk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUMzNkVDQ0Q3QTNGQ0IwMEM4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3MzMyOTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVndta2FTajJTeUd3UTllWUxmVWRxQVwiLFxuICBcInBob25lSWRcIjogXCJkYjQ3MjUyNy02ZGYzLTQ1MjItOGJkZS04NWQ0MmFmNmQzNzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTEwLFxuICAgICAgMjU1LFxuICAgICAgMTYxLFxuICAgICAgMTE0LFxuICAgICAgNzAsXG4gICAgICAxMDAsXG4gICAgICAxMzIsXG4gICAgICAyMjksXG4gICAgICAxMjAsXG4gICAgICAxMyxcbiAgICAgIDgwLFxuICAgICAgMjI0LFxuICAgICAgMTk1LFxuICAgICAgMTMzLFxuICAgICAgNTUsXG4gICAgICAxMjksXG4gICAgICA5OCxcbiAgICAgIDI0NyxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDM3LFxuICAgICAgMjM5LFxuICAgICAgMTQyLFxuICAgICAgMTgxLFxuICAgICAgMTEwLFxuICAgICAgOTAsXG4gICAgICAyMjEsXG4gICAgICAyNTIsXG4gICAgICAyMTYsXG4gICAgICAxOTYsXG4gICAgICA1NyxcbiAgICAgIDE3NCxcbiAgICAgIDQ3LFxuICAgICAgMjAsXG4gICAgICAxNDAsXG4gICAgICAyMjQsXG4gICAgICAxMzIsXG4gICAgICA4NSxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RVQzMzgxNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2OTkxODA5NjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTM0MDI2NzA1ODc5MDg6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4bSgyarJtOG0hOG0hyAgIC1YXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXpjNi9jSEVPT0t6YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvSXJERTZFU2ZLbUFwTWxqS1lwRjRBcnBGV3FiTTJlejY0U2w2K3VCT21JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxkTkcxZmZYYndsOE1BZ2wzQkFacDI3TUYyWG5NS0dSWG15ZFEwSzZqZWN6bkJ2MUFrN3JKYVFSL0l2cFRLK2xJM3J5Y2ZHZnVPRVpNa041WmJIN2hRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi96bHlyZGJEM0RNNTh0Qk1qRmhJenBOTDBrVmhqdkhuM0xNU3AxMHVaYnlxNmhYRk81R0NUZTZYdDk4cHREM0QwM0EyeWg4NnhqTmg5cXNKK0MzVWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjk5MTgwOTY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NzMzMjg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnhFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeEUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpR2pqa3N5cGIzdUhPamRkdHVSZGFsdnFOMTc0M2ZoMEFzYzYwZVl2a0dJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzAzNzQyMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjczMzI4OTI2NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "powered By VINCE Team" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "vince-x",
  packname: process.env.PACK_NAME || "vince-x",
  botname : process.env.BOT_NAME  || "vince x",
  ownername:process.env.OWNER_NAME|| "vince",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "vince"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
