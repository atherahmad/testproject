import { useContext } from 'react'

import './LoginModal.scss'
// No ned to Import the state here , you only need to import the context here
import MainState from '../../../context/MainState'

// this is the right import
//import MainContext fromt "../../../context/MainContext"

export default function LoginModal() {

    // This is the place where you are making mistake. you need to call the Context not the state
    //const context = useContext(MainContext)
    const context = useContext(MainState)

    console.log(context, 'this is the context');

    if (context.showLoginModal === false) {
    return null
    }

    return (
        <div id='login-modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <div className='modal-title'>LOGIN</div>
                </div>
                <div className='modal-body'>
                    <form action="" className='login-form'>
                        <input type='email' placeholder='email-adress'/>
                        <input type='password' placeholder='password'/>
                        <button>LOGIN</button>
                    </form>
                </div>
                <div className='modal-footer'>
                    <button>CANCEL</button>
                </div>
            </div>
        </div>
    )
}
