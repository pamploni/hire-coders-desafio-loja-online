import produce from 'immer';
/* Quando uma action é disparada, o reducer vai verificar o tipo da ação
    Através disso saberamos qual ação será utilizada no respectivo reducer
    Todos os components conectados (que possuem o connect do redux) estrão
    escutando as actions
*/

// mudar os nomes das Actions, de preferencia pra saber quem dispara
// exemplo: @cart/ADD

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
