import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import QuotationForm from './components/QuotationForm';
import FinalQuotation from './components/FinalQuotation';
import Spinner from './components/ui/Spinner';

const StyledMainContainer = styled.div`
    margin: 0 auto;
    width: 90vw;
`;

const StyledQuotationContainer = styled.div`
    background-color: #f2f2f2;
    border-radius: 3px;
    margin: 0 auto;
    padding: 20px;
    width: 80%;
`;

const AutoInsurance = () => {
    const [ loading, setLoading ] = useState( false );

    const [ dataQuotation, setDataQuotation ] = useState( { mark: '', model: '', plan: '', quotation: 5000 } );
    const { mark, model, plan, quotation } = dataQuotation;

    return (
        <StyledMainContainer>
            <Header title="Cotizador de seguros" />

            <StyledQuotationContainer>
                <QuotationForm
                    setLoading={ setLoading }
                    setDataQuotation={ setDataQuotation }
                />

                {
                    loading
                        ? 
                    <Spinner />
                        :
                    ( mark !== '' && model !== '' && plan !== '' )
                        &&
                        <FinalQuotation
                            mark={ mark }
                            model={ model }
                            plan={ plan }
                            quotation={ quotation }
                        />
                }
            </StyledQuotationContainer>
        </StyledMainContainer>
    );
};

export default AutoInsurance;
