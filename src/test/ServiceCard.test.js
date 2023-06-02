import { render, cleanup } from '@testing-library/react';
import ServiceCard from '../__mock__/ServiceCard';

afterEach(() => {
  cleanup();
});

describe('ServiceCard', () => {
  it('ServiceCard renders correctly', () => {
    const servicecard = render(<ServiceCard />);
    expect(servicecard).toMatchSnapshot();
  });
});
