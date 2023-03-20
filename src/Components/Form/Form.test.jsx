import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from '.';

describe('Form', () => {
  it('Button labeled GO!', () => {
    render(<Form requestParams={{method: 'GET', url: 'yo'}}/>);

    const inputLabel = screen.getByTestId('input-label');
    const button = screen.getByTestId('button');

    expect(button).toHaveTextContent('GO!');
    expect(inputLabel).toHaveTextContent('URL:');
  });
})
