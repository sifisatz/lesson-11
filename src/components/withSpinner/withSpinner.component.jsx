import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles'


// Optional How to build HOCs 
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15243938
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading
        ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        : (
            <WrappedComponent {...otherProps} />
        );

}

export default WithSpinner;