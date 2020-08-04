import Layout from './../components/Layout';
import Link from 'next/link';
import SignupComponent from './../components/auth/SignupComponent';
import Header from './../components/Header';
import { isAuth} from './../actions/auth';
import Router from 'next/router';
import {useEffect} from 'react';

const Signup = () => {

    useEffect(() => {
        
        isAuth() && Router.replace(`/`);
       
    }, []);
    return (
        <React.Fragment>
           { !isAuth() && <Layout>
                    <Header />
                    <div className="wrapper">
                        <h2 className="signup-title">Signup</h2>
                        <SignupComponent />
                    </div>
            </Layout>
            }
                <style jsx>
                    {
                        `
                            .wrapper {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                flex-direction: column;
                                padding-top: 60px;
                            }

                            .signup-title {
                                font-size: 1.8rem;
                                margin-bottom: 40px;
                                text-transform: uppercase;
                            }
                        
                        
                        `
                    }
                </style>
        </React.Fragment>
    )
}

export default Signup;