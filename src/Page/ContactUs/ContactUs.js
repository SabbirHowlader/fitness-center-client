import React from 'react';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import Contract from '../Home/Contract/Contract';

const ContactUs = () => {
    useTitle('ContactUs')
    return (
        <div>
            <Contract></Contract>
        </div>
    );
};

export default ContactUs;