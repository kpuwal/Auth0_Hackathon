import LogoutButton from '../../../components/auth/LogoutButton';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('Logout Button', () => {
  it('renders logout button', () => {
    const component = shallow(<LogoutButton />);
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
})
