import React from 'react';
import styled from 'styled-components';
export default function Registros() {
    return (
        <>
            <Topo>
                <FraseTopo>Olá, Fulano</FraseTopo>
                <ion-icon name="exit-outline"></ion-icon>
            </Topo>
            <Displayf>
                <Registro>
                    <Frase>
                        Não há registros de
                        entrada ou saída
                    </Frase>
                </Registro>

            </Displayf>
        </>
    )
}
const Topo = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;

ion-icon{
    background: #8A2BE2;
    color: #FFFFFF;
    width: 40%;
    height: 30px;
}
`
const FraseTopo = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
color: #FFFFFF;
margin-left: 15px;
`
const Displayf = styled.div`
display: flex;
justify-content: center;
`
const Registro = styled.div`
justify-content: center;
background-color: #FFFFFF;
width: 85%;
height: 500px;
border-radius: 5px;
margin-top: 40px;

`
const Frase = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 100;
font-size: 27px;;
text-align: center;
color: #868686;
margin-top: 200px;
`