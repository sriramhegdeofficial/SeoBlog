import { useEffect} from 'react';
import Router from 'next/router';
import { isAuth } from './../../actions/auth'; 


const Admin = (props) => {

    useEffect(() => {
        if(!isAuth()) {
            Router.replace(`/signin`);
        }else if(isAuth().role !== 1) {
            Router.replace(`/`)
        }
    }, []);
    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

export default Admin;