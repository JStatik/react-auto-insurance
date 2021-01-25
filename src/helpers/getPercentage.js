const getPercentage = ( mark, model, plan ) => {
    let percentageMark;
    let percentagePlan;
    const percentageModel = ( new Date().getFullYear() - model ) * -3;

    switch( mark ) {
        case 'fiat': percentageMark = 15;
            break;

        case 'peugeot': percentageMark = 20;
            break;

        case 'ford': percentageMark = 25;
            break;

        case 'chevrolet': percentageMark = 30;
            break;

        default:
            break;
    }

    plan === 'basic' ? percentagePlan = 20 : percentagePlan = 50;

    return {
        totalPercentage: percentageMark + percentageModel + percentagePlan
    };
};

export default getPercentage;
