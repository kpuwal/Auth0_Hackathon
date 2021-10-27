import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from '../../../App';
import store from '../../../redux/store';
 
describe('redux active slice', () => {
  it('should activate the mood', () => {
    const wrapper = mount(
      <Provider store={store}><App /></Provider>
    )
  })
})