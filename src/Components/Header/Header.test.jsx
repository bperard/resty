import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  it('h1 labeled RESTy', () => {
    render(<Header />);

    const headerH1 = screen.getByTestId('header-h1');

    expect(headerH1).toHaveTextContent('RESTy');
  });
})
