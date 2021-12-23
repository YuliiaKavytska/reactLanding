import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eot from 'assets/fonts/icomoon.eot'
import svg from 'assets/fonts/icomoon.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ttf from 'assets/fonts/icomoon.ttf'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import woff from 'assets/fonts/icomoon.woff'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    color: black;
    letter-spacing: 0.2px;
  }


  @font-face {
    font-family: 'icomoon';
    src: url(${eot});
    src: url(${eot}) format('embedded-opentype'),
    url(${ttf}) format('truetype'),
    url(${woff}) format('woff'),
    url(${svg}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"]:before, [class*="icon-"]:before {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-call:before {
    content: "\\e900";
  }

  .icon-location:before {
    content: "\\e901";
  }

  .icon-send:before {
    content: "\\e902";
  }

  .icon-fb:before {
    content: "\\e903";
  }

  .icon-inst:before {
    content: "\\e904";
  }

  .icon-tw:before {
    content: "\\e905";
  }

  .icon-youtube:before {
    content: "\\e906";
  }


`
