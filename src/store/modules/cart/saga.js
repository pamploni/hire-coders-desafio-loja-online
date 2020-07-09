import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { AddToCartSuccess, UpdateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  /* const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  ); */
  const productExists = yield call(api.get, `/pokemon/${id}`);

  // const stock = yield call(api.get, `/stock/${id}`);

  // const stockAmount = stock.data.amount;

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  /* if (amount > stockAmount) {
    toast.error('Não há quantidade suficiente em estoque');
    return;
  } */

  if (productExists) {
    yield put(UpdateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/pokemon/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(AddToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada não disponível.');
    return;
  }

  yield put(UpdateAmountSuccess(id, amount));
}

// esse take latest vai servir para quando o usuário, impaciente com a resposta,
// clicar várias vezes, a requisição considerada será a última
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
