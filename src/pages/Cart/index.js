import React from 'react';
// import { connect } from 'react-redux';
import * as CartAction from '../../store/modules/cart/actions';
// import { bindActionCreators } from 'redux';

import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';

import { Container, Products, Total } from './styles';
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa';

export default function Cart() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <Products>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <FaMinusCircle size={20} color="#ad78e6" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <FaPlusCircle size={20} color="#ad78e6" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(CartAction.removeFromCart(product.id));
                  }}
                >
                  <FaTrash size={20} color="#ad78e6"></FaTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Products>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

// const mapStateToProps = (state) => ({
//   cart: state.cart.map((product) => ({
//     ...product,
//     subTotal: formatPrice(product.price * product.amount),
//   })),
//   total: formatPrice(
//     state.cart.reduce((total, product) => {
//       return total + product.price * product.amount;
//     }, 0)
//   ),
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(CartAction, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
