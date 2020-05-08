import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* position: relative;
  height: 100%; */
  padding: 30px;
  background: #fff;
  border-radius: 8px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #ad78e6;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#ad78e6')};
      }
    }
  }
`;

export const Products = styled.table`
  width: 100%;

  thead th {
    color: #8a8a8a;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    width: 250px;
    height: 250px;
  }
  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 8px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #ad78e6;
    font-weight: bold;
  }

  strong {
    font-size: 24px;
    margin-left: 8px;
  }
`;
