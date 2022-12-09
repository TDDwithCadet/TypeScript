import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Money from './currency/Money';

describe('get result of multiplying stock by number', () => {
  it('multipling correct with Dollar', () => {
      const five:Money = Money.dollar(5);
      expect(five.times(2)).toEqual(Money.dollar(10));
      expect(five.times(3)).toEqual(Money.dollar(15));
    })
  it('equality correct', () => {
     expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
     expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
     expect(Money.franc(5).equals(Money.franc(5))).toEqual(true);
  })
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
