// ==UserScript==
// @name         Country Emojis4
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        */*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const fontUrl = chrome.runtime.getURL("assets/AppleColorEmoji.ttf");

let style=`
@font-face {
	font-family: Apple Color Emoji;
	unicode-range: U+0000, U+000D, U+00A9, U+00AE, U+200D, U+203C, U+2049, U+20E3, U+2122, U+2139, U+2194-2199, U+21A9-21AA, U+231A-231B, U+2328, U+23CF, U+23E9-23F3, U+23F8-23FA, U+24C2, U+25AA-25AB, U+25B6, U+25C0, U+25FB-25FE, U+2600-2604, U+260E, U+2611, U+2614-2615, U+2618, U+261D, U+2620, U+2622-2623, U+2626, U+262A, U+262E-262F, U+2638-263A, U+2640, U+2642, U+2648-2653, U+265F-2660, U+2663, U+2665-2666, U+2668, U+267B, U+267E-267F, U+2692-2697, U+2699, U+269B-269C, U+26A0-26A1, U+26A7, U+26AA-26AB, U+26B0-26B1, U+26BD-26BE, U+26C4-26C5, U+26C8, U+26CE-26CF, U+26D1, U+26D3-26D4, U+26E9-26EA, U+26F0-26F5, U+26F7-26FA, U+26FD, U+2702, U+2705, U+2708-270D, U+270F, U+2712, U+2714, U+2716, U+271D, U+2721, U+2728, U+2733-2734, U+2744, U+2747, U+274C, U+274E, U+2753-2755, U+2757, U+2763-2764, U+2795-2797, U+27A1, U+27B0, U+27BF, U+2934-2935, U+2B05-2B07, U+2B1B-2B1C, U+2B50, U+2B55, U+3030, U+303D, U+3297, U+3299, U+1F004, U+1F0CF, U+1F170-1F171, U+1F17E-1F17F, U+1F18E, U+1F191-1F19A, U+1F1E6-1F1FF, U+1F201-1F202, U+1F21A, U+1F22F, U+1F232-1F23A, U+1F250-1F251, U+1F300-1F321, U+1F324-1F393, U+1F396-1F397, U+1F399-1F39B, U+1F39E-1F3F0, U+1F3F3-1F3F5, U+1F3F7-1F4FD, U+1F4FF-1F53D, U+1F549-1F54E, U+1F550-1F567, U+1F56F-1F570, U+1F573-1F57A, U+1F587, U+1F58A-1F58D, U+1F590, U+1F595-1F596, U+1F5A4-1F5A5, U+1F5A8, U+1F5B1-1F5B2, U+1F5BC, U+1F5C2-1F5C4, U+1F5D1-1F5D3, U+1F5DC-1F5DE, U+1F5E1, U+1F5E3, U+1F5E8, U+1F5EF, U+1F5F3, U+1F5FA-1F64F, U+1F680-1F6C5, U+1F6CB-1F6D2, U+1F6D5-1F6D7, U+1F6DC-1F6E5, U+1F6E9, U+1F6EB-1F6EC, U+1F6F0, U+1F6F3-1F6FC, U+1F7E0-1F7EB, U+1F7F0, U+1F90C-1F93A, U+1F93C-1F945, U+1F947-1F9FF, U+1FA70-1FA7C, U+1FA80-1FA88, U+1FA90-1FABD, U+1FABF-1FAC5, U+1FACE-1FADB, U+1FAE0-1FAE8, U+1FAF0-1FAF8, U+E0030-E0039, U+E0061-E007A, U+E007F, U+FE4E5-FE4EE, U+FE82C, U+FE82E-FE837;
	src: url('${fontUrl}');
	font-display: swap;

}
.html5-video-player a,
div#text-container.style-scope.ytd-channel-name,
span.style-scope.yt-formatted-string,
/*yt-formatted-string,*/
#video-title.style-scope.ytd-rich-grid-media,
a yt-formatted-string#video-title.style-scope.ytd-rich-grid-media,
yt-formatted-string#content-text.style-scope.ytd-backstage-post-renderer,
div#content.style-scope.ytd-channel-tagline-renderer,
a#video-title.yt-simple-endpoint.style-scope.ytd-video-renderer,
.style-scope.ytd-watch-metadata
{font-family: Apple Color Emoji, Roboto, Arial, sans-serif !important;}
`
/*
+
`
.emoji {
  font-family: 'NotoColorEmojiLimited';
}
`
*/
let s;
document.head.append(s=document.createElement('style'))
s.innerHTML=style

for(let sheet of document.styleSheets){
	try{
		for(let rule of sheet.cssRules){
			try {
				if(rule.style.fontFamily.length>0){
					rule.style.fontFamily='Apple Color Emoji,'+rule.style.fontFamily
				}
			} catch (error) {

			}
		}
	}catch(error){}
}
/*
https://github.com/perguto/Country-Flag-Emojis-for-Windows
https://stackoverflow.com/questions/30470079/emoji-value-range
https://gist.github.com/aabed/63c4bfde6a510395657a2ee3383716dd
https://github.com/samuelngs/apple-emoji-linux/releases
*/