import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Board from './Board';
import NewCardForm from './NewCardForm';

describe ('Board', () => {
  // test('renders one card of off the Board', () => {
  //     const { getByText } = render(<Card />);
  //     const linkElement = getByText(/nap/i);
  //     expect(linkElement).toBeInTheDocument();
  // });
  
  test('will render the NewCardForm properly', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        addCardCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
})



















