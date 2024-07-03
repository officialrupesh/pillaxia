import styled from "styled-components";

export const PillaxiaWorkWrapper = styled.section`
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
    padding-bottom: 75px;
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
  padding-block: 50px 60px;
  .section-header{
    margin-bottom: 60px;
  }
  .custom-dots {
    gap: 9px;
    .slick-active div {
      background: #333B52;
    }
    div {
      /* margin-top: 50px; */
      width: 32px;
      height: 6px;
      background: #25affc;
      border-radius: 4px;
    }
  }
  .review-box-wrapper{
    overflow: hidden;
  }
  .review-box {
    background: #1f235b;
    max-width: 800px;
    margin-bottom: 100px;
    width: 100%;
    padding: 30px;
    color: #ffffff;
    border-radius: 16px;
    /* overflow: hidden; */
    box-shadow: 40px 28px 80px rgba(0, 0, 0, 0.08);
    border: 8px solid;
    position: relative;
    justify-content: end;
  }
  .reviewer-details{
    max-width: calc(100% - 180px);
    h4{
      margin-bottom: 32px;
    }
    p{
      margin-bottom: 32px;
    }
  }
  .reviewer-img {
    border-radius: 16px;
    height: 190px;
    overflow: hidden;
    border: 8px solid #ffffff;
    position: absolute;
    z-index: 10;
    left: -50px;
    bottom: -30px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media screen and (max-width: 992px) {
    h5{
      font-size: 1.6rem;
    }
    .review-box-wrapper{
      margin-top: 100px;
      overflow: visible;
    }
    .reviewer-img{
      position: unset;
      margin-top: -100px;
    }
    .review-box{
      flex-direction: column;
      padding-top: 0;
      margin-bottom: 50px;
    }
    .reviewer-details{
      max-width: unset;
      margin-top: 20px;
      text-align: center;
      h5{
        justify-content: center;
      }
    }
    
  }

`;