import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledContainerButton = styled.div`
    font-family: 'Slabo 27px', serif;
`;

const GetQuoteButton = ( { handleClick } ) => {
    return (
        <StyledContainerButton className="mt-3 text-center">
            <button className="btn btn-danger" onClick={ handleClick }>
                Volver a cotizar
            </button>
        </StyledContainerButton>
    );
};

GetQuoteButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default GetQuoteButton;
