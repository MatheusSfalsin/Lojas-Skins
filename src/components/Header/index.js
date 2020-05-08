import React, { useState } from 'react';
import { FaTshirt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { Container, Title, Cart, ContainerSticky } from './styles';

export default function Header() {
  const [headerScroll, setHeaderScroll] = useState(false);

  const cartSize = useSelector((state) => state.cart.length);

  window.onscroll = () => {
    if (window.pageYOffset !== 0) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };

  return (
    <ContainerSticky>
      <Container headerScroll={headerScroll}>
        <Link to="/">
          <Title>
            Skins
            <FaTshirt />
          </Title>
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <FaShoppingCart size={36} color="#FFF" />
        </Cart>
      </Container>
    </ContainerSticky>
  );
}

// SEM O USO DE HOOKS
// export default connect((state) => ({
//   cartSize: state.cart.length,
// }))(Header);
