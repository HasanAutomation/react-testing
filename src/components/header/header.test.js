import React from 'react';
import { shallow } from 'enzyme'
import Header from '.';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component
}

describe('Header component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    })


    it('Should render without errors', () => {
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1)
    });

    it('Should render the logo properly', () => {
        const wrapper = component.find('.logoIMG');
        expect(wrapper.length).toBe(1)
    })
})
