import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import api from "../../service/api"

export default function home() {
    const id = localStorage.getItem('id');

    useEffect(() => {
        api.get(`os/${id}`)
    })
}