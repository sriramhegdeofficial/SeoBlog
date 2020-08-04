

const Alert = (props) => {
    return(
        <React.Fragment>
            <div className="error">
                    <p>{props.children}</p>
            </div>
            <style jsx>
                {
                    `

                    .error {
                        width: 100%;
                        height: 35px;
                        border: 1px solid ${ props.type === 'error' ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 255, 0, 0.8)'};
                        background: ${ props.type === 'error' ? 'rgba(244, 67, 54, 0.6)' : 'rgba(108, 212, 17, 0.6)'};
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        visibility: ${props.visible ? 'visible' : 'hidden'}
                    }
                    
                    p {
                        font-size: 1.1rem;
                        color: white;
                        font-size: 0.9rem;
                    }
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default Alert;