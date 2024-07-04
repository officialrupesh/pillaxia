import styled from "styled-components";

export const HeaderStyled = styled.header`
@media screen and (max-width: 992px) {
  display: none !important;
  
}
  color: #000000;
  padding-block: 24px;
  margin-bottom: 50px;
  .header-right{
    gap: 24px;
  }
  ul {
      gap: 40px;
    li {
      font-size: 1.6rem;
      a{
        color: #000000;

      }
    }
  }
 
`;
export const MobileHeaderStyled = styled.header`
@media screen and (min-width: 992px) {
  display: none !important;
  
}
  color: #000000;
  padding-block: 10px;
  margin-bottom: 50px;
  .nav-section {
    background: #79CFFF url(/images/hero-bg.webp) no-repeat;
    background-size: cover;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 9999999;

    transform: translate(200%,0);
    transition: 0.4s ease-out;
    
    &.open{
      transform: translate(0);

      display: flex !important;
    }
    gap: 24px;
  }
  ul {
    gap: 40px;
    li {
      font-size: 1.6rem;
      color: #ffffff;
      a {
        color: currentColor;
      }
    }
  }
`;
