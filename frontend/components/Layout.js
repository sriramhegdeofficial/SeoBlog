
import Constants from '../constants/constants';

const Layout  = (props) => {
    return (
        <React.Fragment>
            
            {props.children}
            
            <style global jsx>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap');


                   * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;

                }

                html, body {
                    width: 100%;
                    height: 100%;
                    overflow-x: hidden;
                 }

               

            body {
                    background: white;
                    font-family: 'Roboto', sans-serif;
                }
               
                  
                
               
               

                  

                    
                

                `}
            </style>
        </React.Fragment>
    );
}

export default Layout;