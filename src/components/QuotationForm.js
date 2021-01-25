import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import validator from 'validator';
import useForm from '../hooks/useForm';
import isValidQuotationForm from '../helpers/isValidQuotationForm';
import getPercentage from '../helpers/getPercentage';
import MarkSelect from './QuotationForm/MarkSelect';
import ModelSelect from './QuotationForm/ModelSelect';
import BasicCheck from './QuotationForm/BasicCheck';
import CompleteCheck from './QuotationForm/CompleteCheck';
import SubmitButton from './QuotationForm/SubmitButton';
import GetQuoteButton from './QuotationForm/GetQuoteButton';

const StyledForm = styled.form`
    font-family: 'Slabo 27px', serif;
`;

const StyledError = styled.p`
    color: #990000;
    font-family: 'Slabo 27px', serif;
    font-size: '12px';
    text-align: center;
`; 

const QuotationForm = ( { setLoading, setDataQuotation } ) => {
    const [ formValues, handleChange, reset ] = useForm( { mark: '', model: '', plan: '' } );
    const { mark, model, plan } = formValues;

    const [ msgError, setMsgError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        
        const markEscaped = validator.escape( mark );
        const modelEscaped = validator.escape( model );
        const planEscaped = validator.escape( plan );

        const { msgErrorQuotation, isValid } = isValidQuotationForm( markEscaped, modelEscaped, planEscaped );
        setMsgError( msgErrorQuotation );

        if( isValid ) {
            setLoading( true );

            setTimeout( () => {
                const { totalPercentage } = getPercentage( markEscaped, modelEscaped, planEscaped );

                setDataQuotation( ( dataQuotation => {
                    const { quotation } = dataQuotation;
                    const finalQuotation = quotation + ( quotation * ( totalPercentage / 100 ) );

                    return {
                        ...dataQuotation,
                        mark: markEscaped,
                        model: modelEscaped,
                        plan: planEscaped,
                        quotation: parseFloat( finalQuotation ).toFixed( 2 )
                    }
                } ) );

                setLoading( false );
                setDisabled( true );
                reset();
            }, 1500 );
        }
    };

    const handleClick = () => {
        setDataQuotation( ( dataQuotation => {
            return {
                ...dataQuotation,
                mark: '',
                model: '',
                plan: '',
                quotation: 5000
            }
        } ) );

        setDisabled( false );
    };

    return (
        <>
            { msgError && <StyledError>{ msgError }</StyledError> }
        
            <StyledForm autoComplete="off" onSubmit={ handleSubmit }>
                <MarkSelect
                    mark={ mark }
                    handleChange={ handleChange }
                    disabled={ disabled }
                />

                <ModelSelect
                    model={ model }
                    handleChange={ handleChange }
                    disabled={ disabled }
                />

                <div className="row mb-3 text-center">
                    <div className="col-4">
                        <label>Tipo de plan:</label>
                    </div>

                    <div className="col-8">
                        <div className="form-check form-check-inline">
                            <BasicCheck plan={ plan } handleChange={ handleChange } disabled={ disabled } />
                        </div>

                        <div className="form-check form-check-inline">
                            <CompleteCheck plan={ plan } handleChange={ handleChange } disabled={ disabled } />
                        </div>
                    </div>
                </div>

                { !disabled &&  <SubmitButton /> }
            </StyledForm>

            { disabled && <GetQuoteButton handleClick={ handleClick } /> }
        </>
    );
};

QuotationForm.propTypes = {
    setLoading: PropTypes.func.isRequired,
    setDataQuotation: PropTypes.func.isRequired
};

export default QuotationForm;
