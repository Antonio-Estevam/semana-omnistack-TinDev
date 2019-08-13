import React,{useState} from 'react';
import './Login.css';

import api from '../Services/api';

import logo from '../assets/logo.svg';

export default function Login({history}){
    const [username, setUsername] = useState('');

    async function hendleSubmit( e ){
        e.preventDefault();
        const response = await api.post('/devs',{
            username,
        });

        const {_id} = response.data; 

        history.push(`/dev/${_id}`);      
    }
    
    return (
        <div className="login-container">
            <form onSubmit={ hendleSubmit }>
               <img src={logo} alt="Tindev"/> 

               <input placeholder=" Digite seu usuário no Guithub"
                value={username}
                onChange={ e => setUsername(e.target.value)}
               />

               <button type="submit"> ENVIAR </button>
            </form>
        </div> 
        
        
    );
}
//40:53