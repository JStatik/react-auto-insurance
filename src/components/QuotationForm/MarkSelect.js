import React from 'react';
import PropTypes from 'prop-types';

const MarkSelect = ( { mark, handleChange, disabled } ) => {
    return (
        <div className="mb-3">
            <select
                className="form-select"
                name="mark"
                value={ mark }
                onChange={ handleChange }
                disabled={ disabled }
            >
                <option defaultValue>Marca del auto</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="fiat">Fiat</option>
                <option value="ford">Ford</option>
                <option value="peugeot">Peugeot</option>
            </select>
        </div>
    );
};

MarkSelect.propTypes = {
    mark: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default MarkSelect;
