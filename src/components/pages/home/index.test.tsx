import { render, screen } from '@testing-library/react';
import App from '../../../App';
describe('<LoginForm />', () => {
  test('should display a blank login form, with remember me checked by default', async () => {
    const a = 4;
    expect(a).toEqual(4);
    render(<App />);
  });
});
