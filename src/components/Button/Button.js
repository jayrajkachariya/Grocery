import React from 'react';

import './styles.css';

const Button = ({ children, loading, ClassName, ...props }) => (
    <button className={`button ${ClassName}`} disabled={loading} {...props}>
        {loading ? 'Loading...' : children}
    </button>
);

Button.defaultProps = {
    loading: false,
};

export default Button;
