import './App.css'
import React from 'react'
import Primeiro from './components/primeiro';
import ComParametro from './components/ComParametro';
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

import Card from './components/layout/Card'

export default (props) => (
    <div className='App'>
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero ={10}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero ={5}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Componente Com Parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
        {/*<ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>*/
        }{/*<Primeiro/>
        <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo"/>
        <ComParametro titulo="Opa"
            subtitulo="Pega no garoto"/>
        */}
    </div>
);