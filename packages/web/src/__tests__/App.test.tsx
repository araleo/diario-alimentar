import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component tests', () => {
  test('App renders', () => {
    render(<App />);
    const title = screen.getByText('Diário Alimentar');
    expect(title).toBeInTheDocument();
  });
});
