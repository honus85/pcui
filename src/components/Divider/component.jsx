import Element from './index';
import ElementComponent from '../Element/component';

class Divider extends ElementComponent {
    constructor(props) {
        super(props);
        this.elementClass = Element;
    }
}

Divider.propTypes = {};

Divider.defaultProps = {};

export default Divider;