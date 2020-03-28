import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident() {

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [value, setValue] = useState('');

    async function HandleNewIncident(e) {
        e.preventDefault();

        const data = { title, description, value };

        try {
            const response = await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {

        }
    }

    return (

        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a Home
                    </Link>
                </section>
                <form onSubmit={HandleNewIncident}>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Título do caso" />
                    <textarea
                        value={description}
                        onChange={e => setDesc(e.target.value)}
                        placeholder="Descrição do caso" />
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor" />


                    <button className="button" type="submit">Cadastrar caso</button>
                </form>
            </div>

        </div>

    );
}
