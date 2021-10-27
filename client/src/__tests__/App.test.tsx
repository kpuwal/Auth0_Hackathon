import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from '../App';
import About from '../components/About';
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';
// import { mocked } from "ts-jest/utils";

const mockedUseAuth0 = jest.mock("@auth0/auth0-react");

// const mockedUseAuth0 = mocked(useAuth0, true);

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|12345678901234",
};

describe('App', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValueOnce({
        isAuthenticated: true,
        user,
        logout: jest.fn(),
        loginWithRedirect: jest.fn(),
        getAccessTokenWithPopup: jest.fn(),
        getAccessTokenSilently: jest.fn(),
        getIdTokenClaims: jest.fn(),
        loginWithPopup: jest.fn(),
        isLoading: false,
    });
});

  it('renders navigation', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/about/i)).toBeInTheDocument();
  
    const leftClick = {button: 0}
    userEvent.click(screen.getByText(/about/i), leftClick)
    
      // check that the content changed to the new page
    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
    expect(wrapper.find(About)).toHaveLength(0)
    // const main = screen.getByText('home');
    // expect(main).toBeInTheDocument();
  })
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});
