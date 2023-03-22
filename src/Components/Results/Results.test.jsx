import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Results from '.';

describe('Results', () => {
  it('Displays props.data', () => {
    render(<Results data={'test data goes here'} />);

    const responseDisplay = screen.getByTestId('response-display');

    expect(responseDisplay).toHaveTextContent('test data goes here');
  });
})
