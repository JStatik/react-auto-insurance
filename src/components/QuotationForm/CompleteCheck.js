import React from 'react';
import PropTypes from 'prop-types';

const CompleteCheck = ( { plan, handleChange, disabled } ) => {
    return (
        <>
            <label className="form-check-label" htmlFor="complete">Completo</label>
            <input
                type="radio"
                className="form-check-input"
                id="complete"
                name="plan"
                value="complete"
                checked={ plan === 'complete' }
                onChange={ handleChange }
                disabled={ disabled }
            />
        </>
    );
};

CompleteCheck.propTypes = {
    plan: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default CompleteCheck;
