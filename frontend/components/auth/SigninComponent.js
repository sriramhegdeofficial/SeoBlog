import { useState} from 'react';
import Alert from '../Alert';
import {signin, authenticate, isAuth} from './../../actions/auth';
import Router from 'next/router';


const SigninComponent = () => {

  

  
  

  const [values, setValues] = useState({
    email: 'sriramhegde@gmail.com',
    password: 'asdfghjkl',
    error: '',
    isLoading: false,
    message: '',
    showForm: true
});



const {email, password, error, isLoading, message, showForm} = values;

    const handleSignInFormSubmit = (e) => {
        e.preventDefault();
        setValues({...values, isLoading: true, error: false});
        const user = {email, password};
        signin(user)
            .then(data => {
                if(data.error) {
                  setValues({...values, error: data.error, isLoading: false})
                  console.log(values)
                }else {
                   authenticate(data, () => {
                      if(isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                      } else if(isAuth() && isAuth().role === 0) {
                        Router.push(`/user`);
                      }
                   })
                   
                
                }
            })
          
        
    }

    const handleInputChange = inputChangeValue => e => {

        setValues({...values, error: '', message: '', [inputChangeValue] : e.target.value})
    }

    const signinForm = () => {
   

    
      return(
          <React.Fragment>
           <form onSubmit={handleSignInFormSubmit}>
                    <div className="form-control">
                              <input value={email}  onChange={handleInputChange('email')} 
                              type="email" name="email" autoComplete = "off" required />
                              <label htmlFor="email" className="label-name">
                                      <span className="content-name" >Email</span>
                              </label>
                          </div>
                          <div className="form-control">
                              <input value={password} onChange={handleInputChange('password')} 
                              type="password" name="password" autoComplete = "off" required />
                              <label htmlFor="password" className="label-name">
                                      <span className="content-name">Password</span>
                              </label>
                          </div>
                          <div className="submit-button-wrapper">
                              <button type="submit" className="submit-button">Signin</button>
                          </div>
                          
                  </form>
                  <style jsx>
                    {
                      `
                      form {
                        
                        width: 500px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                      }
                      .form-control {
                          position: relative;
                          height: 50px;
                          overflow: hidden;
                          width: 100%;
                          min-width: 400px;
                          margin: 18px 0;
                        }
  
                        .form-control input {
                          width: 100%;
                          height: 50px;
                          color: black;
                          padding-top: 20px;
                          border: none;
                          outline: none;
                          font-weight: 900;
                        }
                        
                        .form-control .label-name {
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                          pointer-events: none;
                          border-bottom: 1px solid rgba(0,0,0,0.3);
                        }
                        
                        .form-control label::after {
                          content: '';
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          left: 0;
                        
                          border-bottom: 3px solid black;
                          transform: translateX(-100%);
                          transition: all 0.3s ease;
                        }
                        
                        .content-name {
                          position: absolute;
                          bottom: 5px;
                          left: 0;
                          color: rgba(0,0,0,0.3);
                          transition: all 0.3s ease;
                        }
                        
                        .form-control input:focus + .label-name .content-name,  .form-control input:valid + .label-name .content-name{
                          transform: translateY(-150%);
                          font-size: 14px;
                          color: black;
                          font-weight: 900;
                        }
                        
                        .form-control input:focus + .label-name::after, .form-control input:valid + .label-name::after {
                          transform: translateX(0%);
                        }
  
                        .submit-button-wrapper {
                          width: 100%;
                          display: flex;
                          justify-content: flex-end;
                          margin-top: 20px;
                        }
  
                        .submit-button {
                            padding: 10px 18px;
                            background: black;
                            color: white;
                            border: none;
                            outline: none;
                            text-transform: uppercase;
                            font-size: 0.68rem;
                            
                        }
                      
                      
                      `
                    }
                  </style>
            </React.Fragment>
  
      );
}

  return (
        <React.Fragment>
          <div className="form-wrapper">
          <Alert type= { error ? 'error' : 'success'} visible={error || message ? true : false}>
                {error ? error : message}
          </Alert> 
          { showForm && signinForm() }
          </div>
           
           <style jsx>
             {
               `
               .form-wrapper {
                 width: 500px;
                 display: flex;
                 flex-direction: column;
               }
               
               
               `
             }
           </style>
        </React.Fragment>
    );
}

export default SigninComponent;