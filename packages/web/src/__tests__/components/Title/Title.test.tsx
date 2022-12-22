import { render, screen } from '@testing-library/react';
import Title from '../../../components/Title/Title';

describe('Title component tests', () => {
  test('Title renders', () => {
    render(<Title />);
    const title = screen.getByText('Diário Alimentar');
    expect(title).toBeInTheDocument();
  });
});
