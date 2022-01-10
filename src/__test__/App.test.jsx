import { render, screen } from '@testing-library/react';

import App from '@app/App';

describe('Main Application', () => {
  it('has main container', () => {
    render(<App />);

    let component = screen.queryByTestId('MainApp');
    expect(component).toBeInTheDocument();
  });
});
