// ==UserScript==
// @name         Country Emojis4
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        */*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let style=`
@font-face {
	font-family: NotoColorEmojiLimited;
	/*unicode-range: U+1F1E6-1F1FF;*/
	//unicode-range: U+1F000-1F02F, U+1F0A0-1F0FF, U+1F100-1F64F, U+1F680-1F6FF, U+1F910-1F96B, U+1F980-1F9E0;
	unicode-range: U+1F000-1F02F, U+1F0A0-1F0FF, U+1F100-1F64F, U+1F680-1F6FF, U+1F910-1F96B, U+1F980-1F9E0,
	U+1F6D6-1F6D7, U+1F6FB-1F6FC, U+1F90C, U+1F970-1F9A2, U+1F9A3-1F9A4, U+1F9AC-1F9AD, U+1F9CB, U+1FA74, U+1FA83-1FA86, U+1FA96-1FA9F, U+1FAA0-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6,
	U+26A0, U+26F7, U+1F3CC, U+1FAF6, U+2764, U+1F90D, U+1FAE1-1FAE2, U+1FAE5, U+2728, U+1FAE6, U+2615, U+23F0, U+2600, U+2B50, U+2601, U+2744, U+2708, U+27A1, U+2B07, U+2757, U+2714, U+274C, U+26BD, U+1FAE0, U+1FAE3, U+1FAE4,
	U+0080-02AF, U+0300-03FF, U+0600-06FF, U+0C00-0C7F, U+1DC0-1DFF, U+1E00-1EFF, U+2000-209F, U+20D0-214F, U+2190-23FF, U+2460-25FF, U+2600-27EF, U+2900-29FF, U+2B00-2BFF, U+2C60-2C7F, U+2E00-2E7F, U+3000-303F, U+A490-A4CF, U+E000-F8FF, U+FE00-FE0F, U+FE30-FE4F, U+1F000-1F02F, U+1F0A0-1F0FF, U+1F100-1F64F, U+1F680-1F6FF, U+1F910-1F96B, U+1F980-1F9E0, U+1F9ED, U+1F9F1, U+1F9F3, U+1F9E8, 
	U+1FAF1-1FAF4, U+1F90F, U+1FAF0, U+1FAF5, U+1FAC5, U+1FAC3-1FAC4, U+1F9E3-1F9E6, U+1FA71-1FA73, U+1FAB7, U+1FAB9, U+1FABA, U+1FAE7, U+1F96D, U+1F96C, U+1FAD8, U+1F96E-1F96F, U+1FAD7, U+1FAD9, U+1F9E9, U+1FAA9, U+1F9F5, U+1F9F6, U+1F9E7, U+1FA81, U+1F9FF, U+1FAAC, U+1F9F8, U+1F9F5, U+1F9F6, U+1FA95, U+1F9EE, U+1FA94, U+1F9FE, U+1FA93, U+1F9F0, U+1F9F2, U+1F9EA, U+1F9EB, U+1F9EC, U+1FA79, U+1FA7C, U+1FA7A, U+1FA91, U+1FA92, U+1F9F4, U+1F9F7, U+1F9F9-1F9FA, U+1F9FB-1F9FD, U+1F9EF, U+1FAAA, U+FE0F, U+1FA79, U+1F9E1, U+1F90E, U+1F7E1-1F7EB, U+25EF, U+E0067, U+E0062-E0063, U+E0065, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F, 
	U+200D, U+200e, U+203c, U+203d, U+2049, U+204a, U+20e3, U+20e4, U+2122, U+2123, U+2139, U+213a, U+2194, U+219a, U+21a9, U+21ab, U+231a, U+231c, U+2328, U+2329, U+2388, U+2389, U+23cf, U+23d0, U+23e9, U+23f4, U+23f8, U+23fb, U+24c2, U+24c3, U+25aa, U+25ac, U+25b6, U+25b7, U+25c0, U+25c1, U+25fb, U+25ff, U+2600, U+2605, U+260e, U+260f, U+2611, U+2612, U+2614, U+2616, U+2618, U+2619, U+261d, U+261e, U+2620, U+2621, U+2622, U+2624, U+2626, U+2627, U+262a, U+262b, U+262e, U+2630, U+2638, U+263b, U+2640, U+2641, U+2642, U+2643, U+2648, U+2654, U+265f, U+2661, U+2663, U+2664, U+2665, U+2667, U+2668, U+2669, U+267b, U+267c, U+267e, U+2680, U+2692, U+2698, U+2699, U+269a, U+269b, U+269d, U+26a0, U+26a2, U+26aa, U+26ac, U+26b0, U+26b2, U+26bd, U+26bf, U+26c4, U+26c6, U+26c8, U+26c9, U+26ce, U+26d0, U+26d1, U+26d2, U+26d3, U+26d5, U+26e9, U+26eb, U+26f0, U+26f6, U+26f7, U+26fb, U+26fd, U+26fe, U+2702, U+2703, U+2705, U+2706, U+2708, U+270e, U+270f, U+2710, U+2712, U+2713, U+2714, U+2715, U+2716, U+2717, U+271d, U+271e, U+2721, U+2722, U+2728, U+2729, U+2733, U+2735, U+2744, U+2745, U+2747, U+2748, U+274c, U+274d, U+274e, U+274f, U+2753, U+2756, U+2757, U+2758, U+2763, U+2765, U+2795, U+2798, U+27a1, U+27a2, U+27b0, U+27b1, U+27bf, U+27c0, U+2934, U+2936, U+2b05, U+2b08, U+2b1b, U+2b1d, U+2b50, U+2b51, U+2b55, U+2b56, U+3030, U+3031, U+303d, U+303e, U+3297, U+3298, U+3299, U+329a, U+fe0f, U+fe10, U+1f004, U+1f005, U+1f0cf, U+1f0d0, U+1f170, U+1f172, U+1f17e, U+1f180, U+1f18e, U+1f18f, U+1f191, U+1f19b, U+1f1e6, U+1f200, U+1f201, U+1f203, U+1f21a, U+1f21b, U+1f22f, U+1f230, U+1f232, U+1f23b, U+1f250, U+1f252, U+1f300, U+1f322, U+1f324, U+1f394, U+1f396, U+1f398, U+1f399, U+1f39c, U+1f39e, U+1f3f1, U+1f3f3, U+1f3f6, U+1f3f7, U+1f4fe, U+1f4ff, U+1f53e, U+1f549, U+1f54f, U+1f550, U+1f568, U+1f56f, U+1f571, U+1f573, U+1f57b, U+1f587, U+1f588, U+1f58a, U+1f58e, U+1f590, U+1f591, U+1f595, U+1f597, U+1f5a4, U+1f5a6, U+1f5a8, U+1f5a9, U+1f5b1, U+1f5b3, U+1f5bc, U+1f5bd, U+1f5c2, U+1f5c5, U+1f5d1, U+1f5d4, U+1f5dc, U+1f5df, U+1f5e1, U+1f5e2, U+1f5e3, U+1f5e4, U+1f5e8, U+1f5e9, U+1f5ef, U+1f5f0, U+1f5f3, U+1f5f4, U+1f5fa, U+1f650, U+1f680, U+1f6c6, U+1f6cb, U+1f6d3, U+1f6d5, U+1f6d6, U+1f6e0, U+1f6e6, U+1f6e9, U+1f6ea, U+1f6eb, U+1f6ed, U+1f6f0, U+1f6f1, U+1f6f3, U+1f6fb, U+1f7e0, U+1f7ec, U+1f90d, U+1f93b, U+1f93c, U+1f946, U+1f947, U+1f972, U+1f973, U+1f977, U+1f97a, U+1f9a3, U+1f9a5, U+1f9ab, U+1f9ae, U+1f9cb, U+1f9cd, U+1fa00, U+1fa70, U+1fa74, U+1fa78, U+1fa7b, U+1fa80, U+1fa82, U+1fa90, U+1fa96, U+e0062, U+e0064, U+e0065, U+e0066, U+e0067, U+e0068, U+e006c, U+e006d;
	//src: url(https://raw.githack.com/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf);
	src: url(https://raw.githubusercontent.com/ranryuu/aplemjlnx00000/main/AppleColorEmoji.ttf);
	font-display: swap;
}
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
					rule.style.fontFamily='NotoColorEmojiLimited,'+rule.style.fontFamily
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