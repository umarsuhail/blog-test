import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Comments from '../components/Comments';
import { useRouter } from 'next/navigation';

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }}));

test('renders Comments', () => {
    render(<Comments />);
  });