import styled from "styled-components";

export const TotalStyles = styled.div`
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
    margin-bottom: 2rem;

    .text {
      flex: 1;
    }
    .total {
      width: 50px;
      text-align: end;
    }
  }
`;