import styled from "styled-components";

export const CardStyles = styled.div`
  margin-top: 1rem;
  background-color: #F2F7FC;
  border: solid 1px #E4EEFA;
  border-radius: 5px;
  padding: 1.3rem;
  display: flex;

  .checkbox {
    width: 60px;

    .radio {
      border: 0px;
      width: 60px;
      height: 2em;
      margin-left: -5px;
      cursor: pointer;
    }
  }

  .detail {
    flex: 1;

    .name {
      font-size: 16px;
      font-weight: bold;
    }

    .exp {
      font-size: 15px;
      color: grey;
      margin: 7px 0;
    }

    .action {
      margin: 10px 0;
      font-size: 15px;

      .text-button {
        font-weight: bold;
        cursor: pointer;
        color: #0075FF;
      }
    }
  }

  .card {
    display: flex;
    gap: 1rem;
  }

  .img-wrapper {
    width: 50px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .text-detail {
    flex: 1;
  }

  .security {
    margin-top: 12px;

    input {
      width: 100px;
      margin-top: 10px;
      height: 30px;
      border-radius: 4px;
      border-color: lightgrey;
    }

    img {
      width: 40px;
      margin: 0 10px;
      margin-bottom: -14px;
    }
  }
`;