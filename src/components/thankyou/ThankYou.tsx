import React from 'react'

import IThankYou from '../../interface/IThankYou'

interface IThankYouProps {
    theCustomer: IThankYou 
}

export default function ThankYou(props: IThankYouProps) {
    console.log(props)
    return (
        <div>
            Tack för din bokning!
        </div>
    )
}