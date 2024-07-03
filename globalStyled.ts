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
    font-family: "Inter Variable", sans-serif;
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
}
.btn-join{
    background: #25AFFC !important;
    box-shadow: 0px 4px 4px rgba(37, 175, 252, 0.25);
    color: #ffffff !important;
    &:hover{
        background:#25AFFC;
    }
}
.btn-gradient{
    background: linear-gradient(to right, #3967F5 0%, #77F3FD 100%);
    color: #ffffff;
    &:hover{
        background: linear-gradient(to left, #3967F5 0%, #77F3FD 100%);;
    }
    
    
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

.smooth-animate{
    transition: 0.6s ease-out;
    &-quick{
        transition: 0.3s ease-out;
    }
}

`;
