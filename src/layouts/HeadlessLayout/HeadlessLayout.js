import PropTypes from 'prop-types';

function HeadlessLayout({ children }) {
    return <div className="container">{children}</div>;
}

HeadlessLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeadlessLayout;
