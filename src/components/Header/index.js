import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket, MdPerson, MdPersonAdd } from 'react-icons/md';

import { Container, Cart, HdRegistro, HdCesta, DvImg } from './styles';

import logo from '../../Assets/images/pikachu.png';

// import { Container } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <HdRegistro>
        <div>
          <MdPersonAdd size={27} color="#FFF" />
          <strong>Registrar</strong>
        </div>
        <div>
          <MdPerson size={27} color="#FFF" />
          <strong>Entrar</strong>
        </div>
      </HdRegistro>

      <DvImg>
        <Link to="/">
          <img src={logo} alt="Pokemon" />
        </Link>
      </DvImg>

      <HdCesta>
        <Cart to="/cart">
          <div>
            <strong>Minha Cesta</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={27} color="#FFF" />
        </Cart>
      </HdCesta>
    </Container>
  );
}
