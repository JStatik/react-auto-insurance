import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledFinalQuotation = styled.div`
    font-family: 'Slabo 27px', serif;
    margin-top: 20px;
    text-align: center;
`;

const FinalQuotation = ( { mark, model, plan, quotation } ) => {
    return (
        <>
            <StyledFinalQuotation className="animate__animated animate__fadeIn">
                <hr/>
                
                <h3>Cotización Final</h3>

                <ul className="bg-warning">
                    <li>Marca: <span className="data-quotation">{ mark }</span></li>
                    <li>Modelo: <span className="data-quotation">{ model }</span></li>
                    <li>Plan: <span className="data-quotation">{ plan }</span></li>
                </ul>

                <div className="row text-center">
                    <div className="col-5 offset-1 mt-3">
                        <p>TOTAL:</p>
                    </div>

                    <div className="col-5 mt-3 text-success">
                        <p>$ { quotation }</p>
                    </div>
                </div>
            </StyledFinalQuotation>
        </>
    );
};

FinalQuotation.propTypes = {
    mark: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    quotation: PropTypes.string.isRequired
};

export default FinalQuotation;
