import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = `pk_test_51Hn0C9A5x9p7iwjROFDWq0eEzDaxJzUso9eRg1TPMUX20sLENA6ecrg7s02hoLplI3heyRrzwlAAgdnN3JYdhBr5003ay3Lbuz`;

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is  $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;