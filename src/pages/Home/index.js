import React, { useState, useEffect } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import { ProductList, DivButton } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [qtdePok, setQtdePok] = useState(0);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  // o Array vazio apos a virgula garante que será executado apenas uma vez
  useEffect(() => {
    async function handleGetPokemon() {
      const promises = [];
      const pokArr = [];

      for (let i = 1; i < 10; i++) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }

      await Promise.all(promises).then(res => {
        const pokemonData = res;

        pokemonData.map(element => {
          pokArr.push(Object.assign(element.data, { price: 9.9 }));
        });
      });

      // console.log(pokArr);

      setProducts(pokArr);
    }

    handleGetPokemon();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.AddToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.sprites.front_default} alt={product.name} />
          <strong>{product.name}</strong>
          <div>
            <span>{`${formatPrice(product.price)}`}</span>
          </div>

          <DivButton>
            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdShoppingBasket size={16} color="#FFF" />{' '}
                {amount[product.id] || 0}
              </div>

              <span>Adicionar à Cesta</span>
            </button>
          </DivButton>
        </li>
      ))}
    </ProductList>
  );
}
