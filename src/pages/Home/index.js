import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CartAction from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Products } from './styles';
import { FaCartPlus } from 'react-icons/fa';
// import { bindActionCreators } from 'redux';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const apiData = async () => {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    };

    apiData();
  }, []);

  function addProduct(productId) {
    // dispatch(CartAction.addToCart(product));
    dispatch(CartAction.addToCartRequest(productId));
  }

  return (
    <Products>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />

          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button onClick={() => addProduct(product.id)}>
            <div>
              <FaCartPlus size={16} color="#FFF" />
              {amount[product.id]}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </Products>
  );
}

// const mapStateToProps = (state) => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;
//     return amount;
//   }, {}),
//   // amount: state.cart.amount,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(CartAction, dispatch);

// export default connect(null, mapDispatchToProps)(Home);
