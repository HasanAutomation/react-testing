import React from 'react';
import { shallow } from 'enzyme'
import Header from '.';

describe('Header component', () => {
    it('Should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1)
    });

    it('Should render the logo properly', () => {
        const component = shallow(<Header />);
        const wrapper = component.find('.logoIMG');
        expect(wrapper.length).toBe(1)
    })
})
