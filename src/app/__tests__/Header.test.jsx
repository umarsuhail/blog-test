import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }}));

test('renders Header', () => {
    render(<Header />);
  });