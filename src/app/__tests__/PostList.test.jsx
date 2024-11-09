import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PostsList from '../components/PostsList';

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }}));

test('renders Posts list component', () => {
    render(<PostsList />);
  });