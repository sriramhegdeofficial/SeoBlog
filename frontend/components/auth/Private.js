import { useEffect} from 'react';
import Router from 'next/router';
import { isAuth } from './../../actions/auth'; 


const Private = (props) => {

    useEffect(() => {
        if(!isAuth()) {
            Router.replace(`/signin`);
        }
    }, []);
    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

export default Private;