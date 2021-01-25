import React from 'react';
import PropTypes from 'prop-types';

const ModelSelect = ( { model, handleChange, disabled } ) => {
    return (
        <div className="mb-3">
            <select
                className="form-select"
                name="model"
                value={ model }
                onChange={ handleChange }
                disabled={ disabled }
            >
                <option defaultValue>Modelo del auto</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </select>
        </div>
    );
};

ModelSelect.propTypes = {
    model: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default ModelSelect;
