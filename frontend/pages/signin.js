import Layout from './../components/Layout';
import SigninComponent from './../components/auth/SigninComponent';
import Header from './../components/Header';


const Signin = () => {
    return (
        <React.Fragment>
            <Layout>
                    <Header />
                    <div className="wrapper">
                        <h2 className="signin-title">Signin</h2>
                        <SigninComponent />
                    </div>
            </Layout>
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

                            .signin-title {
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

export default Signin;