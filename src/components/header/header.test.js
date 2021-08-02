import React from 'react';
import { shallow } from 'enzyme'
import Header from '.';
import { findByTestAttr } from '../../utils';

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
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    });

    it('Should render the logo properly', () => {
        const wrapper = findByTestAttr(component, 'logoIMG')
        expect(wrapper.length).toBe(1)
    })
})
