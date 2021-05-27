import {createGlobalStyle} from "styled-components"

const GlobalStyles =  createGlobalStyle`
@import url('http://fonts.cdnfonts.com/css/sofia-pro');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}
body::-webkit-scrollbar {
  width: 8px;             /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: #FFFFFF;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #c2c2c2;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid #FFFFFF;  /* creates padding around scroll thumb */
}
body {
	line-height: 1;
		//Variáveis
  --black: #0D0D0F;
	--white: #FFFAFA;
	--grey: #616161;
	--green: #6CB652;
	--light-grey: #9A9A9A;
	--pastel-yellow: #FFBA52;
	--pastel-red: #EA8E8E;
	--text-grey: #858585;
	--text-light-grey: #ACACAC;
	font-family: 'Sofia Pro', sans-serif;
}
`
export default GlobalStyles;