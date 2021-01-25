import validator from 'validator';

const isValidQuotationForm = ( mark, model, plan ) => {
    if( mark.trim().length < 4 || model.trim().length < 4 || plan.trim().length < 5 ) {
        return {
            msgErrorQuotation: 'Todos los campos son necesarios para la cotización.',
            isValid: false
        };
    } else if( validator.isEmpty( mark ) || validator.isEmpty( model ) || validator.isEmpty( plan ) ) {
        return {
            msgErrorQuotation: 'Todos los campos son necesarios para la cotización.',
            isValid: false
        };
    } else if ( !validator.isAlpha( mark, [ 'es-ES' ] ) || !validator.isAlpha( plan, [ 'es-ES' ] ) ) {
        return {
            msgErrorQuotation: 'Los datos ingresados no son válidos.',
            isValid: false
        };
    } else if( isNaN( model ) || !validator.isInt( model, { min: 2012, max: 2021, allow_leading_zeroes: false } ) || !validator.isNumeric( model ) ) {
        return {
            msgErrorQuotation: 'Los datos ingresados no son válidos.',
            isValid: false
        };
    }

    return {
        msgErrorQuotation: null,
        isValid: true
    };
};

export default isValidQuotationForm;
