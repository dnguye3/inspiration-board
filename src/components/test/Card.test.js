import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      key={3}
      id={55}
      text="Are you a git repository? Because I would commit to you."
      emoji="milky_way"
      deleteCardCallback={() => { }}
      />
    )
    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('The "DeleteCardCallback" prop function is called when the `✨Take This Card✨` button is clicked on', () => {

    // Arrange
    // Create a mock callback function
    const takeThisCard = jest.fn();

    // Render card
    const container = render(
      <Card
        key={3}
        id={55}
        text="Are you a git repository? Because I would commit to you."
        emoji="milky_way"
        deleteCardCallback={takeThisCard}
      />
      );

    // Act
    // Find the Mark Absent Button
    const button = container.getByText(/✨ Take this card ✨/i);

    // Trigger a click event
    button.click();

    // Assert
    // Verify that the callback function was called
    expect(takeThisCard).toHaveBeenCalled();
  });
});