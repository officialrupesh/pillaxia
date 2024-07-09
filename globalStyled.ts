import {createGlobalStyle} from "styled-components";
import "@fontsource-variable/inter";

export default createGlobalStyle`

html{
-webkit-text-size-adjust: 100%;
text-rendering: optimizeLegibility;
font-size: 10px;
scroll-behavior: smooth;
}
*{
    margin: 0;
    padding: 0;
}

body{
     overflow-x: hidden!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* font-family: "Inter Variable", sans-serif; */
      font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;

    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    
    /* background: #fafafa; */
    color: #ffffff;
}
p,h1,h2,h5,h6,ul,li{
    margin: 0;
    padding: 0;
}
p{
    font-size: 1.4rem;
    line-height: 2.4rem;

}
a{
    text-decoration: none;
}

h2{
    /* font-size: 5.4rem; */
        font-size: clamp(30px, 4vw, 54px);
    line-height: 1.3;
    font-weight: 700;
}
h4{
    font-size: 2.4rem;
    line-height: 1.3;
}
h5{
    font-size: 2rem;
    line-height: 1.3;
}
h6{
    font-size: 1.6rem;
    line-height: 1.3;
}


.btn{
    min-height: 42px;
    padding-inline: 20px;
    font-size: 1.6rem;
    outline: none;
    border: none;
    transition:  0.4s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
}
.btn-join{
    background: #25AFFC !important;
    box-shadow: 0px 4px 4px rgba(37, 175, 252, 0.25);
    color: #ffffff !important;
    &:hover{
        background:#25AFFC;
        box-shadow: 1px 1px 20px 1px rgb(37 175 252 / 80%);
    }
}
.btn-gradient{
    background: linear-gradient(to right, #3967F5 0%, #77F3FD 100%);
    color: #ffffff;
    border-radius: 5px;
    &:hover{
        background: linear-gradient(to left, #3967F5 0%, #77F3FD 100%);;
    }
    
    
}

.btn-size-lg{
    min-width: 260px;
    min-height: 56px;
}

.section-header{
    h2 {
    margin-bottom: 4px;
    span {
      color: #79CFFF;
    }
  }
  p{
    font-size: 1.6rem;
  }
}

/* .smooth-animate{
    transition: 0.6s ease-out;
    &-quick{
        transition: 0.3s ease-out;
    }
} */
@media screen and (max-width: 992px){
    .btn-size-lg{
        min-width: 160px;
        min-height: 48px;
    }
    
}

/* video player */
#videoContainer {
    position: relative;
    width: 100%;
    margin: auto;
}

#video {
    width: 100%;
    display: block;
}

.video-controls {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 30px;
    padding-inline: 40px;
    z-index: 1000;
    &-left{
        gap: 30px;
    }
  
}

.video-controls button {
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
}
.main-play-btn{
    button{
        position: absolute;
        top: 50%;
        left: 50%;
        height: clamp(60px,10vw,154px);
        width: clamp(60px,10vw,154px);
        
        transform: translate(-50%, -50%);
        border-radius: 50%;
        /* border: 5px solid  rgba(255,255,255,0.91); */
        border-color: transparent;
        transition: 0.1s ease-out;
        background: rgba(0,0,0,0.3);
        color: #ffffff;
        &:hover{
            border: 3px solid rgba(255,255,255,0.71);
        }
        svg{
            height: clamp(24px,6vw,60px);
            width: clamp(24px,6vw,60px);
        }
    }
}

[data-fullscreen="true"] .video-controls {
     position: absolute;
    top: 0;
    width: 100%;
    padding-top: 30px;
    padding-inline: 40px;
    z-index: 1000;
    &-left{
        gap: 30px;
    }
    z-index: 1000; /* Ensure controls are above other elements */
}

[data-fullscreen="true"] #video {
    width: 100%;
    height: 100%;
}

video:-webkit-full-screen {
    width: 100%;
    height: 100%;
}

video:-moz-full-screen {
    width: 100%;
    height: 100%;
}

video:-ms-fullscreen {
    width: 100%;
    height: 100%;
}

video:fullscreen {
    width: 100%;
    height: 100%;
}

`;
