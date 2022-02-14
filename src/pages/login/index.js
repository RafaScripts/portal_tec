import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { useHistory } from "react-router-dom"
//import './styles.css';
import api from '../../service/api';

const Index = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [id_cloud] = useState('');
    //const [id_service] = useState('')
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('logon', { email, password });

            localStorage.setItem('id_cloud', response.data.id_cloud);
            localStorage.setItem('id_service', response.data.id_service)

            history.push('/home');
        }catch (err) {
            alert("dados invalidos!");
        }


    }
    return (
        <div >
            <section >
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />


                    <button className="button" type="submit"><FiLogIn size={16} color= "#000" />
                        Entrar</button>


                </form>
            </section>


        </div>
    );
}

export default Index;