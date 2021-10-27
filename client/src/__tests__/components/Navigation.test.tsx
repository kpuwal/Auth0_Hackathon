import Navigation from '../../components/Navigation';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Navigation', () => {
  it('finds all navigation links', () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Navigation />
      </MemoryRouter>);

      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/about/i)).toBeInTheDocument();
      expect(screen.getByText(/Log In/i)).toBeInTheDocument();
      expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  
      // const leftClick = {button: 0}
      // userEvent.click(screen.getByText(/about/i), leftClick)
    
      // // check that the content changed to the new page
      // expect(screen.getByText(/Hello/i)).toBeInTheDocument()

  })
})

