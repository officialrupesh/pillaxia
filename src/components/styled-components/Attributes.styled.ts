import styled from "styled-components";

const AttributesStyled = styled.div`
  background: #02004b;
  color: #ffffff;
  padding-block: 50px 75px;

  h2 {
    margin-bottom: 4px;
    span {
      color: #79CFFF;
    }
  }
  .section-header{
    margin-bottom: 70px;
  }

  .card-wrapper {
    background: url("/images/card-bg.png") no-repeat;
    padding: 30px 20px;
    background-size: cover;
    color: #ffffff;
    border-radius: 10px;
    overflow: hidden;

    .card {
      &-img {
        height: 85px;
        width: 85px;
        background: #ffffff;
        border: 6px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 16px;
        position: relative;
      }
      &-details {
        /* max-width: 95px; */
      }
    }
    h5 {
      margin-bottom: 12px;
    }
  }
`;

export default AttributesStyled