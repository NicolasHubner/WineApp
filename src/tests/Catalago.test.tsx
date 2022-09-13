import React from 'react'
import renderer, { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';
// import Catalogo from '../screens/Catalogo';
import MainStack from '../stacks/MainStack'
import App from '../../App'
import Catalogo from '../screens/Catalogo';

describe('App', () => {
  it('Renderizar o componente raiz', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('Catalogo', () => {
  it('Texto do input', () => {
    // act(() => render(<Catalogo/>))
    render(<App/>)
    const inputText = screen.getByPlaceholderText('O que você está procurando?')
    // console.log(inputText);
    expect(inputText).toMatch
  })
  it('Texto de produtos encontrados', () => {
    render(<App/>)
    const textFindProduct = screen.getByText('produtos encontrados')
    expect(textFindProduct).toMatch
  })
  // it('Texto sobre quantidade certas de produtos', () => {
  //   render(<App/>)
  //   const numberFindProduct = screen.getByText('45');
  //   expect(numberFindProduct).toMatch
  // })
})

describe('MainStack', () => {
  it('Render MainStack', () => {
    render(<MainStack/>)
  })
  it('Aparecer os 45 produtos encontrados do fetch', async() => {
    render(<MainStack/>)
    const textProducts = await screen.findByText('45 produtos encontrados')
    expect(textProducts).toMatch;
  })
})