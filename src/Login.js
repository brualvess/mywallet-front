import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    function logar() {

        const promise = axios.post('https://localhost:5000/login', {
            email: email,
            password: senha
        })

        promise.catch(tratarError)
        promise.then(tratarSucesso)
    }
    function tratarError() {
        alert("Falha no login")
    }

    function tratarSucesso() {
        navigate("/registros")
    }


return (
    <>
        <Titulo>
            <FraseTitulo>
                MyWallet
            </FraseTitulo>
        </Titulo>
        <Form>
            <input type='email' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
            <Botao>
                <Entrar onClick={logar}>Entrar</Entrar>
            </Botao>
            <Cadastro onClick={() => navigate("/cadastro")}>Primeira vez ? Cadastre-se!</Cadastro>
        </Form>
    </>
)
}
const Titulo = styled.div`
display: flex;
justify-content: center;
`
const FraseTitulo = styled.div`
align-self:center;
margin-top: 200px;
height: 50px;
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
`
const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 20px;

  input{
width: 85%;
height: 50px;
align-self:center;
border-radius: 5px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-top: 10px;
  }
  `
const Botao = styled.div`
background: #A328D6;
border-radius: 5px;
width: 85%;
height: 43px;
margin-top: 15px;
align-self: center;
display: flex;
justify-content: center;
`
const Entrar = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
color:#FFFFFF;
margin-top: 12px;
`
const Cadastro = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 18px;
text-align: center;
color:#FFFFFF;
margin-top: 40px`