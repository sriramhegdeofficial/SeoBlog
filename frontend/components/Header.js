import Constants from '../constants/constants';
import { APP_NAME } from './../config';
import Link from 'next/link';

const Header = (props) => {
    return(
        <React.Fragment>
                <header>
                    <Link href="/">
                        <a className="logo">
                            {APP_NAME}
                        </a>
                    </Link>
                    <div className="spacer"></div>
                    <nav className="navlink-wrapper">
                        <Link href="/signup" >
                            <a className="navlink">Signup</a>
                        </Link>
                        <Link href="/signin" >
                            <a className="navlink">Signin</a>
                        </Link>
                    </nav>
                    <style jsx>
                        {`

                            header {
                                flex: 1;
                                min-height: 65px;
                                height: 65px;
                                border-bottom: 2px solid rgba(0,0,0, 0.05);
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                padding: 0 85px;
                            }
                        
                            .logo {
                                color: black;
                                text-decoration: none; 
                                font-weight: 900;
                                font-size: 1.28rem;
                                font-family: 'Pacifico', cursive;
                            }

                            .spacer {
                                flex: 1;
                            }

                            .navlink-wrapper {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                
                            }
                            
                            .navlink {
                                margin-left: 30px;
                                text-decoration: none;
                                color: rgba(0,0,0,0.3);
                                font-weight: 900;
                                font-size: 0.9rem;
                                letter-spacing: 1.4px;
                                transition: color 0.6s;
                            }

                            .navlink:hover {
                                color: black;
                            }
                        
                        
                        `}

                    </style>
                </header>
        </React.Fragment>
    );
}

export default Header;