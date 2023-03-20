import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('Footer', () => {
  it('Renders © 2018 to screen', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent('© 2018');
  });
})
