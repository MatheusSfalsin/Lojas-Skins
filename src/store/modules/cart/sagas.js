import { call, select, put, all, takeLatest } from 'redux-saga/effects'; // precisa para chamada a api // put dispara uma action no redux
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  // select; // sera responsavel por buscar informação dentro do estado

  const producExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = producExists ? producExists.amount : 0; // quantidade de produtos que ja esta no carrinho

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade insuficiente no estoque.');
    return;
  }

  if (producExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart'); // irá fazer a navegação do usuario
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  // const product = yield select((state) => state.cart.find((p) => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade insuficiente no estoque.');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  // para ouvir uma action
  takeLatest('@cart/ADD_REQUEST', addToCart), // espera a primeira chamada responder
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
