import React from 'react'
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';
import Catalogo from '../screens/Catalogo';
import App from '../../App'

describe('App', () => {
  it('Renderizar o componente raiz', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree.children.length).toBe(1);
  })
})

describe('Catalogo', () => {
  it('Texto do input', () => {
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
})