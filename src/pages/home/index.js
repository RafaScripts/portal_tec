import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import api from "../../service/api"

export default function Home() {
    const id = 2;

    const [ os, setOs ] = useState('');

    const token = localStorage.getItem('token')

    //console.log(token);

    useEffect( () => {
        async function loadOS() {
            const response = await api.get(`os/${id}`, {
                headers: {
                    bearer: token,
                },
            })

            setOs(response.data);
        }

        loadOS();
    }, []);
    
    console.log(os);
    return(
        <div>
            <h1>
                testes
            </h1>

            <ul>
                {os.map(os => {
                    <li key={os.id}>
                        <span> {os.Motivo}</span>
                        <span> {os.hour}</span>
                        <span> {os.resume}</span>
                        <span> {os.os_cloud_id}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}