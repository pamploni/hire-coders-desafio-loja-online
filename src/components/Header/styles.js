import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 55px 0;
`;

export const HdRegistro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;
  height: 60px;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    align-items: center;
    justify-content: flex-start;

    strong {
      font-size: 11px;
      font-weight: 500;
      color: #fff;
    }
  }
`;

export const DvImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;

  img {
    width: 100%;
  }
`;

export const HdCesta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 200px;
  height: 60px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 11px;
      color: #acc;
    }
  }
`;
