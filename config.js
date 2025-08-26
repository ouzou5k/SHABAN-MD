const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
    // 🔑 Session & Owner
    SESSION_ID: process.env.SESSION_ID || "",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "22383267744",
    OWNER_NAME: process.env.OWNER_NAME || "Ouzou-officiel",
    DEV: process.env.DEV || "22383267744",

    // 🤖 Bot Info
    BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
    STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
    DESCRIPTION: process.env.DESCRIPTION || "*© Powered by Ouzou_officiel*",
    PREFIX: process.env.PREFIX || "$",

    // 🖼️ Images & Messages
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/default.jpg",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/default.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> I am alive ⚡",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Seen your status ✅*",
    REJECT_MSG: process.env.REJECT_MSG || "*Sorry, my boss is busy. Please don’t call me 🚫*",

    // 📡 Status Options
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN, "true"),
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY, "false"),
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT, "true"),

    // 👥 Group Options
    WELCOME: convertToBool(process.env.WELCOME, "false"),
    ADMIN_EVENTS: convertToBool(process.env.ADMIN_EVENTS, "false"),

    // 😀 Reactions
    AUTO_REACT: convertToBool(process.env.AUTO_REACT, "false"),
    CUSTOM_REACT: convertToBool(process.env.CUSTOM_REACT, "false"),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️,💙,💜,🤍,😎,🤑,😍,😁",

    // 🚫 Anti Features
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS, "false"),
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, "false"),
    ANTI_LINK: convertToBool(process.env.ANTI_LINK, "true"),
    ANTI_VV: convertToBool(process.env.ANTI_VV, "false"),
    ANTI_CALL: convertToBool(process.env.ANTI_CALL, "false"),
    ANTI_DELETE: convertToBool(process.env.ANTI_DELETE, "false"),
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",

    // ⚙️ Modes
    MODE: process.env.MODE || "public",       // public / private / group / inbox
    PUBLIC_MODE: convertToBool(process.env.PUBLIC_MODE, "true"),
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE, "false"),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, "false"),
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING, "false"),
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE, "false"),
    READ_CMD: convertToBool(process.env.READ_CMD, "false"),

    // 🎤 Auto Messages
    AUTO_VOICE: convertToBool(process.env.AUTO_VOICE, "false"),
    AUTO_STICKER: convertToBool(process.env.AUTO_STICKER, "false"),
    AUTO_REPLY: convertToBool(process.env.AUTO_REPLY, "false"),
};
