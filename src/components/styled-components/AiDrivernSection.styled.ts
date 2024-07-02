import styled from "styled-components";

export const AiDrivenSectionStyled = styled.section`
  .ai-driven-wrapper {
    background: url("images/ai-driven-bg.png") no-repeat;
    background-size: cover;
    padding-block: 60px 100px;
    .section-header {
        margin-bottom: 60px;
      h2 {
        color: #02004b;
        span {
          background: linear-gradient(to right, #79cfff 0%, #25affc 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: unset;
        }
      }
      p {
        color: #333b52;
      }
    }
    .feature {
        &-wrapper{
            margin-block: 114px;
        }
      &-header {
        color: #25affc;
        margin-bottom: 16px;
      }
      &-icon {
        margin-right: 1.6rem;
        background: #25affc;
        color: #ffffff;
        border-radius: 50%;
        width: 41px;
        height: 41px;
      }
      &-body {
        color: #333b52;
        height: 150px;
      }
    }
    .features-display-screen{
        max-width: 340px;
        width: 100%;
        border: 12px solid rgba(255,255,255,0.6);
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,0.15);
    }
  }
  .app-download-section {
    background: url("images/download-bg.png") no-repeat;
    background-size: cover;
    padding-block: 80px;

    .download-links-wrapper {
      gap: 20px;
      a {
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
  }
`;