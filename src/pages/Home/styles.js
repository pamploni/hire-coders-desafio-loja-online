import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  list-style: none;
  border-radius: 40px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 3px;
    padding: 5px;
    overflow: hidden;
    max-width: 300px;
    min-width: 100px;

    img {
      align-self: center;
      width: 100%;
      border-radius: 5px;
      background-color: #509902;
    }

    strong {
      font-size: 18px;
      line-height: 20px;
      font-weight: 500;
      color: #333;
      margin-top: 5px;
      padding-left: 3px;
      align-items: center;
      text-align: left;
    }

    > div {
      margin-top: 10px;
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;

        p {
          font-size: 12px;
          font-weight: 400;
          margin-left: 2px;
          vertical-align: center;
        }
      }
    }

    span {
      font-size: 18px;
      font-weight: 700;
      padding-right: 4px;
      color: #12f;
      text-align: end;
      width: 100%;
    }

    span {
      margin-left: 5px;
    }
  }
`;

export const DivButton = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  margin: auto;
  justify-content: flex-end;
  align-content: flex-end;

  text-align: center;

  button {
    background: #377003;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#377003')};
    }

    div {
      display: flex;
      align-items: center;
      padding: 10px;
      background: rgba(0, 0, 0, 0.3);

      svg {
        margin-right: 5px;
      }
    }

    span {
      font-size: 10px;
      font-weight: 500;
      padding-right: 16px;
      color: #fff;
      flex: 1;
    }
  }
`;
