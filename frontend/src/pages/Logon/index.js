import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const history = useHistory();
    const [id, setID] = useState('');


    async function HandleLogin(e) {
        e.preventDefault();

        const data = { id }
        try {
            const response = await api.post('login', data);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        }
        catch (err) { alert('ERRO! Tente Novamente.') }
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={HandleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit"> Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}