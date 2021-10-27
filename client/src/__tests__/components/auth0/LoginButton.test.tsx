import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
// import App from '../App';
// import Auth0ProviderWithHistory from '../components/auth/Auth0ProviderWithHistory';
import LoginButton from  '../../../components/auth/LoginButton';

// jest.mock("@auth0/auth0-react", () => ({
//     withAuthenticationRequired: jest.fn().mockImplementation((component, ignore) => component)
// }))

// test('renders profile view', () => {
//     const rendered = render(<Profile/>);
//     const sectionHeading = rendered.container.querySelector("#profile-section-heading")
//     expect(sectionHeading).toBeInTheDocument()
// });

// afterEach(() => jest.clearAllMocks())

describe('Login Button', () => {
  it ('renders login button', () => {
    const component = shallow(<LoginButton />);
    expect(component).toMatchSnapshot();
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <button onClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
