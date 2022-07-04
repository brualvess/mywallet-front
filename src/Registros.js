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
            <Rodape>
                <Entrada>
                <ion-icon name="add-circle-outline"></ion-icon>
                <Textinho>Nova<p></p>entrada</Textinho>
                </Entrada>
                <Saida>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <Textinho>Nova <p></p> saída</Textinho>
                </Saida>
            </Rodape>
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
const Rodape = styled.div`
display: flex;
justify-content: center;
margin-top: 60px;
justify-content: space-around;
`
const Entrada = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
ion-icon{
    background:  #A328D6;;
    color: #FFFFFF;
    width: 35%;
    height: 30px;
    margin-top : 5px;
}
`
const Saida = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
ion-icon{
    background:  #A328D6;
    color: #FFFFFF;
    width: 35%;
    height: 30px;
    margin-top : 5px;
}
`
const Textinho = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 900;
font-size: 19px;
color: #FFFFFF;
margin-left: 10px;
margin-top: 30px;


`