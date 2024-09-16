const axios = require('axios');
const fetch = require("node-fetch");
const cheerio = require("cheerio");

function extrairID(q) {
const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed|shorts|user|channel|c)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
const match = q.match(youtubeRegex);
if (match) {
const videoId = match[1];
return `https://www.youtube.com/watch?v=${videoId}`;
}
return q;
}

//Play
async function play2(q) {
try {
q = await extrairID(q);
const apiUrl = `https://www.youtube.com/youtubei/v1/search?prettyPrint=false`;
const payload = {
context: {
client: {
hl: "pt",
gl: "BR",
deviceMake: "",
deviceModel: "",
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36,gzip(gfe)",
clientName: "WEB",
clientVersion: "2.20240628.01.00",
osName: "Windows",
osVersion: "10.0",
browserName: "Chrome",
browserVersion: "126.0.0.0",
screenWidthPoints: 1366,
screenHeightPoints: 305,
screenPixelDensity: 1,
screenDensityFloat: 1,
utcOffsetMinutes: -180,
userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
memoryTotalKbytes: "4000000",
mainAppWebInfo: {
graftUrl: `/results?search_query=${q}`
}
},
request: {
useSsl: true,
internalExperimentFlags: [],
consistencyTokenJars: []
},
user: {
lockedSafetyMode: false
}
},
adSignalsInfo: {
params: [
{ key: "dt", value: "1719795187382" },
{ key: "flash", value: "0" },
{ key: "frm", value: "0" },
{ key: "u_tz", value: "-180" },
{ key: "u_his", value: "4" },
{ key: "u_h", value: "768" },
{ key: "u_w", value: "1366" },
{ key: "u_ah", value: "768" },
{ key: "u_aw", value: "1366" },
{ key: "u_cd", value: "24" },
{ key: "bc", value: "31" },
{ key: "bih", value: "305" },
{ key: "biw", value: "1349" },
{ key: "brdim", value: "0,0,0,0,1366,0,1366,768,1366,305" },
{ key: "vis", value: "1" },
{ key: "wgl", value: "true" },
{ key: "ca_type", value: "image" }
]
},
query: `${q}`,
webSearchboxStatsUrl: `/search?oq=${q}&gs_l=youtube.3..0i512k1l4j0i22i30k1l10.115906.115906.1.116742.4.3.1.0.0.0.471.471.4-1.1.0....0...1ac.1.64.youtube..2.2.706....0.E9XetO-t4X4`
};
const response = await axios.post(apiUrl, payload);
const contents = response.data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents[0];
if (contents.playlistRenderer) {
const playlistRenderer = contents.playlistRenderer;
const playlistId = playlistRenderer.playlistId;
const playlistTitle = playlistRenderer.title.simpleText;
const playlistThumbnails = playlistRenderer.thumbnails;
const videoCount = playlistRenderer.videoCount;
const canal = playlistRenderer.shortBylineText.runs[0].text;
const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
const browseEndpoint = playlistRenderer.viewPlaylistText.runs[0].navigationEndpoint.browseEndpoint;
const browsePayload = {
context: payload.context,
browseId: browseEndpoint.browseId
};
const browseResponse = await axios.post(`https://www.youtube.com/youtubei/v1/browse`, browsePayload);
const jdijdwi = browseResponse.data;
const info = jdijdwi.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;
const videos = info.map(video => {
const videoData = video.playlistVideoRenderer;
const videoId = videoData?.videoId;
const title = videoData?.title?.runs[0]?.text;
const thumbnails = videoData?.thumbnail?.thumbnails;
const duration = videoData?.lengthText?.simpleText;
const viewCount = videoData?.videoInfo?.runs[0]?.text || 'Desconhecido';
const publishedTime = videoData?.videoInfo?.runs[2]?.text || 'Desconhecido';
const canal = videoData?.shortBylineText?.runs[0]?.text;
const linkcanal = videoData?.shortBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl;
const videoUrl = `https://www.youtube.com/watch?v=${videoId}&list=${videoData?.navigationEndpoint?.watchEndpoint?.playlistId}&index=${videoData?.index?.simpleText}`;
if (videoId && title && thumbnails && canal) {
return {
videoId,
title,
thumbnails,
duration,
viewCount,
publishedTime,
canal,
linkcanal: `https://www.youtube.com${linkcanal}`,
videoUrl
};
} else {
console.warn("Dados incompletos para o vídeo:", videoData);
return null;
}
}).filter(video => video !== null);
console.log(videos);
return {
status: true,
resultado: {
title: playlistTitle,
playlistUrl,
thumbnails: playlistThumbnails,
videoCount,
canal,
videos
}
};
} else if (contents.videoRenderer) {
const informacoes = contents.videoRenderer;
const id_linkcanal = informacoes.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url;
const id_video = informacoes.videoId;
const videoUrl = `https://www.youtube.com/watch?v=${id_video}`;
const title = informacoes.title.runs[0].text;
const thumbnails = informacoes.thumbnail.thumbnails;
const canal = informacoes.longBylineText.runs[0].text;
const linkcanal = `https://www.youtube.com${id_linkcanal}`;
const tempo = informacoes.lengthText.accessibility.accessibilityData.label;
const lancamento = informacoes.publishedTimeText ? informacoes.publishedTimeText.simpleText : '';
const visualizacoes = informacoes.viewCountText.simpleText;
const checkProgress = async (id) => {
const progressUrl = `https://p.oceansaver.in/ajax/progress.php?id=${id}`;
while (true) {
const { data } = await axios.get(progressUrl);
if (data.success === 1 && data.progress === 1000) {
return data.download_url;
}
await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos
}
};
const downloadInFormats = async () => {
const formats = ["4k", "1440", "1080", "720", "480", "360", "mp3", "m4a", "webm", "aac", "flac", "opus", "ogg", "wav"];
const downloadPromises = formats.map(async (format) => {
const downloadUrl = `https://ab.cococococ.com/ajax/download.php?format=${format}&url=${videoUrl}`;
try {
const { data } = await axios.get(downloadUrl);
if (data.success) {
const downloadId = data.id;
const downloadLink = await checkProgress(downloadId);
console.log(`format: ${format}_video link: ${downloadLink}`)
return { format: `${format}_video`, link: downloadLink };
} else {
return { format: `${format}_video`, link: null };
}
} catch (error) {
console.error(`Erro ao baixar vídeo em ${format}:`, error.message);
return { format: `${format}_video`, link: null };
}
});
const results = await Promise.all(downloadPromises);
const downloads = results.reduce((acc, { format, link }) => {
acc[format] = link;
return acc;
}, {});
return downloads;
};
const downloads = await downloadInFormats();
return {
status: true,
resultado: {
downloads,
title,
thumbnails,
canal,
videoUrl,
linkcanal,
tempo,
lancamento,
visualizacoes
}
};
} else {
throw new Error('Nenhum resultado encontrado');
}
} catch (error) {
console.error(error);
return { status: false, mensagem: 'Ocorreu um erro, contate o suporte', erro: error.message };
}
}

//PlaySrc
async function playsearch(q) {
try {
q = await extrairID(q);
const apiUrl = `https://www.youtube.com/youtubei/v1/search?prettyPrint=false`;
const payload = {
context: {
client: {
hl: "pt",
gl: "BR",
deviceMake: "",
deviceModel: "",
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36,gzip(gfe)",
clientName: "WEB",
clientVersion: "2.20240628.01.00",
osName: "Windows",
osVersion: "10.0",
browserName: "Chrome",
browserVersion: "126.0.0.0",
screenWidthPoints: 1366,
screenHeightPoints: 305,
screenPixelDensity: 1,
screenDensityFloat: 1,
utcOffsetMinutes: -180,
userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
memoryTotalKbytes: "4000000",
mainAppWebInfo: {
graftUrl: `/results?search_query=${q}`
}
},
request: {
useSsl: true,
internalExperimentFlags: [],
consistencyTokenJars: []
},
user: {
lockedSafetyMode: false
}
},
adSignalsInfo: {
params: [
{ key: "dt", value: "1719795187382" },
{ key: "flash", value: "0" },
{ key: "frm", value: "0" },
{ key: "u_tz", value: "-180" },
{ key: "u_his", value: "4" },
{ key: "u_h", value: "768" },
{ key: "u_w", value: "1366" },
{ key: "u_ah", value: "768" },
{ key: "u_aw", value: "1366" },
{ key: "u_cd", value: "24" },
{ key: "bc", value: "31" },
{ key: "bih", value: "305" },
{ key: "biw", value: "1349" },
{ key: "brdim", value: "0,0,0,0,1366,0,1366,768,1366,305" },
{ key: "vis", value: "1" },
{ key: "wgl", value: "true" },
{ key: "ca_type", value: "image" }
]
},
query: `${q}`,
webSearchboxStatsUrl: `/search?oq=${q}&gs_l=youtube.3..0i512k1l4j0i22i30k1l10.115906.115906.1.116742.4.3.1.0.0.0.471.471.4-1.1.0....0...1ac.1.64.youtube..2.2.706....0.E9XetO-t4X4`
};
const response = await axios.post(apiUrl, payload);
const resultados = response.data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
const videos = resultados.map(item => {
if (!item.videoRenderer) {
return null;
}
const informacoes = item.videoRenderer;
const id_video = informacoes.videoId;
const videoUrl = `https://www.youtube.com/watch?v=${id_video}`;
const title = informacoes.title.runs[0].text;
const thumbnails = informacoes.thumbnail.thumbnails;
const canal = informacoes.longBylineText.runs[0].text;
const id_linkcanal = informacoes.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url;
const linkcanal = `https://www.youtube.com/${id_linkcanal}`;
const tempo = informacoes.lengthText?.accessibility?.accessibilityData?.label || 'Duração desconhecida';
const lancamento = informacoes.publishedTimeText?.simpleText || 'Data desconhecida';
const visualizacoes = informacoes.viewCountText?.simpleText || 'Visualizações desconhecidas';
return {
videoUrl,
title,
thumbnails,
canal,
linkcanal,
tempo,
lancamento,
visualizacoes
};
}).filter(video => video !== null);
return { status: true, resultado: videos };
} catch (error) {
console.error(error);
return { status: false, mensagem: 'Ocorreu um erro, contate o suporte', erro: error.message };
}
}
module.exports = { play2, playsearch }