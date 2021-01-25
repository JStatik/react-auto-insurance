import React from 'react';
import PropTypes from 'prop-types';

const BasicCheck = ( { plan, handleChange, disabled } ) => {
    return (
        <>
            <label className="form-check-label" htmlFor="basic">Básico</label>
            <input
                type="radio"
                className="form-check-input"
                id="basic"
                name="plan"
                value="basic"
                checked={ plan === 'basic' }
                onChange={ handleChange }
                disabled={ disabled }
            />
        </>
    );
};

BasicCheck.propTypes = {
    plan: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default BasicCheck;
