import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CardComponent from '../components/Card';
import { useRouter } from 'next/navigation';

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }}));

test('renders CardComponent', () => {
    render(<CardComponent />);
  });