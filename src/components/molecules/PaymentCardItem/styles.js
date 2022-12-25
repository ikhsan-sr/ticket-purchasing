import styled from "styled-components";

export const CardStyles = styled.div`
  margin-top: 1rem;
  background-color: #F2F7FC;
  border: solid 1px #E4EEFA;
  border-radius: 5px;
  padding: 1rem;
  display: flex;

  .checkbox {
    width: 60px;
  }

  .detail {
    flex: 1;
  }

  .radio {
    border: 0px;
    width: 60px;
    height: 2em;
    margin-left: -5px;
    cursor: pointer;
  }

  .card {
    display: flex;
  }

  .img-wrapper {
    width: 50px;
  }

  .text-detail {
    flex: 1;
  }
`;