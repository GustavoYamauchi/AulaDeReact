import React from "react";
import ReactDOM from "react-dom";


const root = document.getElementById("root");


// function Inicio(props) {
//     function handleClickAno() {
//         alert(props.ano);
//     }
    
//     const hello = (
//         <>
//             <h1 onClick={handleClickAno}>hello world in {props.ano}</h1>
//             <p>{props.estaLogado ? 'Vc ta logado' : 'Vc n ta logado'}</p>
//         </>
//     );
    
//     return hello;
// }




// function Alunos() {
//     const alunos = ['Baras', 'Bee', 'Cadu', 'Sayuri']
    

//     const geral = alunos.map((aluno, index) => <li key={index}>{aluno}</li>)

//     return(
//         <ul>
//             {geral}
//         </ul>
//     )
// }

function Layout(props) {
    return <div className="container">
        <div className="row">
            {props.children}
        </div>
    </div>
}

function App() {
    const acoes = [1,2,3,4,5,6,7,8,9,10]
    return (
        <Layout>
            {acoes.map((acao, index) => <Acao key={index} nome={acao} />)}
        </Layout>
    )
}



function Preco() {
    return (
        <div className="col">
            <h2>2,20</h2>
        </div>
        
    )
}


function NomeCodigo(props) {
    return (
        <div className="col">
            <h1>{props.nome}</h1>
        </div>
        
    )
}

function Porcentagem() {
    return (
        <div className="col">
            <h2>5%</h2>
        </div>
    )
}

function Header(props) {
    return (
        <div className="col-3">
            <div className="row">
                <Preco></Preco>
                <NomeCodigo nome={props.nome}></NomeCodigo>
                <Porcentagem></Porcentagem>
            </div>
        </div>
        
    )
}

// function Body() {
//     return(
        
//     )
// }

function Historico() {
    const hist = [5, 2, 4, 5, 6, 7, 8]
    return (
        <>
            {hist.map((item, index) => <h5 key={index}>{item}</h5>)}
        </>
        
    )
}
function Acao(props) {
    return (
        <>
            <Header nome={props.nome}/>
            {/* <Historico/> */}
        </>
    )
}

ReactDOM.render(<App/>, root);