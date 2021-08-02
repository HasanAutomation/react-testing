import HeadLine from "./index"
import { findByTestAttr } from "../../utils";
import { shallow } from "enzyme";

const setUp = (props = {}) => {
    const component = shallow(<HeadLine {...props} />)
    return component;
}

describe('HeadLine Component', () => {

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'My App header',
                desc: 'My app description'
            }
            component = setUp(props);
        })

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'headlineComponent');
            expect(wrapper.length).toBe(1)
        })

        it('Should render the header', () => {
            const wrapper = findByTestAttr(component, 'header');
            expect(wrapper.length).toBe(1)
        })

    })

    describe('Have no props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        })

        it('Should not render header', () => {
            const wrapper = findByTestAttr(component, 'headlineComponent');
            expect(wrapper.length).toBe(0)

        })
    })
})