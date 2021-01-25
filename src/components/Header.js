import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
`;

const StyledH1 = styled.h1`
    font-family: 'Slabo 27px', serif;
    font-size: 2rem;
    margin: 0;
`;

const Header = ( { title } ) => {
    return (
        <StyledHeader>
            <StyledH1>{ title }</StyledH1>
        </StyledHeader>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
