import styled from "styled-components";

export const PillaxiaWorkWrapper = styled.div`
  background: #0e0e2c;
  padding-block: 50px;
  .section-header {
    margin-bottom: 40px;
  }
  .card-steps {
    &-wrapper {
      padding: 24px 24px 16px 24px;
      background: #1F235B;
      border-radius: 9px;
      border: 1px solid rgba(255,255,255,0.2);
    }
  }
  .card-step {
    &-header {
      margin-bottom: 20px;
    }
    &-count {
      font-size: 1.6rem;
      height: 29px;
      width: 29px;
      background: #25affc;
      border-radius: 50%;
      color: #ffffff;
    }

    &-body {
      font-size: 1.4rem;
      h6 {
        margin-bottom: 10px;
      }
    }
  }
`;


export const HeroSectionWrapper = styled.section`
  background: url("/images/hero-bg.png") no-repeat;
  background-size: cover;
  .path-bg {
    background: #ffffff;
    gap: 10px;
    padding-inline: 22px;
    padding-block: 5px;
    border-radius: 5px;
    margin-bottom: 22px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.13);

    .dot-before,
    .dot-after {
      height: 6px;
      width: 6px;
      background: #25affc;
      border-radius: 50%;
    }
    h6 {
      color: #25affc;
    }
  }
  .hero-section-container {
    color: #333b52;
    padding-bottom: 120px;
    .section-header {
      h2 {
        margin-bottom: 16px;
      }
    }
    .hero-img {
      border: 14px solid rgba(121, 207, 255, 0.07);
      border-radius: 30px;
      overflow: hidden;
      background: #ffffff;
    }

    .associated-programs{
      &-wrapper{
        h6{
          margin-bottom: 24px;
        }
      }
      .associated-program{
        border-radius: 10px;
        overflow: hidden;
        border: 3px solid  rgba(255,255,255,0.75);
        background: #ffffff;
        margin-right: 24px;
      }
    }
  }
`;


export const ReviewSectionWrapper = styled.section`
  background: #f6f4fe;
  color: #333b52;
  padding-block: 50px 120px;
  .review-box {
    background: #1f235b;
    max-width: 800px;
    width: 100%;
    color: #ffffff;
    border-radius: 16px;
    /* overflow: hidden; */
    box-shadow: 40px 28px 80px rgba(0, 0, 0, 0.08);
    border: 8px solid;
    position: relative;
  }
  .reviewer-img {
    border-radius: 16px;
    overflow: hidden;
    border: 8px solid #ffffff;
    position: absolute;
    z-index: 10;
    left: -50px;
    bottom: -30px;
    height: 190px;
  }
`;