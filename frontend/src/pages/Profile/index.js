import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'


import './styles.css';
import { FiTrash2, FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';


export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function HandleDelete(id) {

        try {
            api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            }).then();

            //setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch (err) {
            alert("Erro ao deletar caso");
        }
        finally {
            const response = await api.get('profile', {
                headers: {
                    Authorization: ongId
                }
            });
            setIncidents(response.data)
        }
    }

    function HandleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName.toUpperCase()}</span>

                <Link to="/incidents/new" className="button">Cadastrar novo Caso</Link>
                <button type="button"
                    onClick={HandleLogout}>
                    <FiPower size={18} color="#E02041" /></button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {
                    incidents.map(incident => (

                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>
                            <strong>DESCRIÇÃO</strong>
                            <p>{incident.description}</p>
                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat(
                                'pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                                .format(incident.value)}</p>
                            <button type="button"
                                onClick={() => HandleDelete(incident.id)}>
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    ))}
            </ul>

        </div>
    );
}