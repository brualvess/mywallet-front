import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    let navigate = useNavigate()



    return(
        <>
        <Titulo>
            <FraseTitulo>
                MyWallet
            </FraseTitulo>
        </Titulo>
        <Form>
            <input type='nome' placeholder="Nome" />
            <input type='email' placeholder="E-mail" />
            <input type='password' placeholder="Senha" />
            <input type='password' placeholder="Confirme a senha" />
            <Botao>
                <Entrar>Cadastrar</Entrar>
            </Botao>
            <Logar onClick={()=>navigate("/")}>Já tem uma conta? Entre agora!</Logar>
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
margin-top: 130px;
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
const Logar = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 18px;
text-align: center;
color: #8A2BE2;
margin-top: 30px;
color:#FFFFFF;
`