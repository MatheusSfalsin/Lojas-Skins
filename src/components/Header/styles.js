import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSticky = styled.div`
  position: relative;
  height: 150px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: 0.3s;

  ${(props) =>
    props.headerScroll
      ? css`
          background: #292929;
          padding: 15px 30px 10px;
        `
      : css`
          animation: transparent;
          padding: 45px 30px 10px;
        `}
`;

export const Title = styled.h1`
  display: flex;
  color: #fff;
  font-size: 48px;
  align-items: center;
  text-decoration: none;
  margin-left: 50px;
  transition: 0.2s;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-left: 12px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 50px;

  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #fff;
    }
  }
`;
