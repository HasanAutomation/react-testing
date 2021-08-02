import React from 'react';
import { shallow } from 'enzyme'
import Header from '.';

describe('Header component', () => {
    it('Should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(2)
    })
})
