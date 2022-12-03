import React from 'react';

const ForgotPasswordPage = (props) => {
    console.log(props);
    return (
        <div>
            Forgot Password
        </div>
    );
};
export async function getStaticProps() {
    
    return {
        props: {
            products: {
                id: '1',
                name: "GJ"
            }
        }
    }
}
export default ForgotPasswordPage;