//Exportações De Módulos 

//***BAILEYS ABAIXO***//
const { downloadContentFromMessage, prepareWAMessageMedia, relayWAMessage, mentionedJid, processTime, MediaType, Browser, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore } = require('@whiskeysockets/baileys');

//***Módulos Abaixo***//

const { Boom }  = require('@hapi/boom');
const { AssemblyAI } = require("assemblyai");
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const PhoneNumber = require('awesome-phonenumber');
const { randomBytes } = require("crypto");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const path = require('path');
const yts = require('yt-search');
const infoSystem = require('os')
const speed = require('performance-now');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();

//***Exportar Todos Os Módulos Para Fazer Requires***//

module.exports = { downloadContentFromMessage, prepareWAMessageMedia, relayWAMessage, mentionedJid, processTime, MediaType, Browser, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore, Boom, AssemblyAI, axios, fs, cheerio, crypto, util, PhoneNumber, randomBytes, P, NodeCache, linkfy, request, ms, os, ffmpeg, fetch, qrterminal, exec, spawn, execSync, moment, colors, path, yts, infoSystem, speed, emoji, EmojiAPI }