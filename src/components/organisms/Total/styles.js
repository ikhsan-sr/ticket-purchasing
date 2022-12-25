import styled from "styled-components";

export const TotalStyles = styled.div`

  h4 {
    margin: 1.2rem 0 0.4rem 0;
  }

  .total-wrapper {
    display: flex;
    justify-content: space-between;

    .text {
      font-size: 20px;
      font-weight: bolder;
    }
    .total {
      font-weight: bolder;
      text-align: end;
      font-size: 21px;
    }
  }

  .ticket-wrapper {
    display: flex;
    justify-content: space-between;

    .text {
      flex: 1;
    }
    .total {
      width: 50px;
      text-align: end;
    }
  }

  .fees-wrapper {
    display: flex;
    justify-content: space-between;

    .text {
      flex: 1;
    }
    .total {
      width: 50px;
      text-align: end;
    }
  }

  .delivery-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .text {
      flex: 1;
    }
    .total {
      width: 50px;
      text-align: end;
    }
  }

  .cancel {
    cursor: pointer;
    color: #2D6CD7;
    line-height: 55px;
  }

  .note {
    font-size: 12px;
    font-weight: bold;
  }
`;