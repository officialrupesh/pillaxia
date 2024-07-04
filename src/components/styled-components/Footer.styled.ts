import styled from "styled-components";


export const FooterWrapper = styled.div`
  &.footer-wrapper {
    background: #0d0f2c;
    color: white;
    padding-top: 6rem;
  }
  .footer {
    &-top {
      img {
        margin-bottom: 32px;
      }
      .social-media-wrapper {
        .social-media-item {
          height: 45px;
          width: 45px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          background: transparent;
          color: #ffffff;
          transition: 0.5s ease-in;
          &:hover {
            background: #ffffff;
            color: #333b52;
          }
        }
      }
    }
    &-item {
      h3 {
        color: #25affc;
        margin-bottom: 20px;
      }
      li {
        font-size: 1.4rem;
        margin-bottom: 14px;
        a {
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: #ffffff;
          transition: 0.2s ease-in;
          &:hover {
            color: #25affc;
          }
        }
      }
    }

    &-copyright-section {
      padding-block: 1.6rem;
      background: #000222;
    }
  }
`;
