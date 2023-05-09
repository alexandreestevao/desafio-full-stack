import React from 'react';

class Home extends React.Component {

    render() {
        return(
            <div class="container">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é um sistema de controle de fornecedores e empresas.</p>
                    <hr className="my-4" />
                    <p>Utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                    <a className="btn btn-primary btn-lg" 
                    href="#/consult-fornecedor" 
                    role="button"><i className="fa fa-fornecedores"></i>  
                    Fornecedores
                    </a> <s></s>
                    <a className="btn btn-danger btn-lg" 
                    href="#/consult-empresa" 
                    role="button"><i className="fa fa-empresas"></i>  
                    Empresas
                    </a>                
                    </p>
                </div>
            </div>          
        )
    }
}


export default Home;