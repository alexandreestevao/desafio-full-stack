import React from 'react';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import * as messages from '../../components/toastr';

import {withRouter } from 'react-router-dom';

import EmpresaService from '../../app/services/empresaService';

class RegisterEmpresas extends React.Component {

    state = {
        id: null,
        nomeFantasia: '',
        cnpj: '',
        cep: '',
        atualizando: false
    }

    constructor() {
        super();
        this.service = new EmpresaService();
    }

    componentDidMount() {
        const params = this.props.match.params
        if(params.id) {
            this.service
                .obterPorId(params.id)
                .then(response => {
                    this.setState({...response.data, atualizando: true}) // Spread operator ...
                }).catch(error => {
                    messages.mensgemErro(error.response.data)
                })
        }

    }

    submit = () => {
        // Destructor operator
        const { nomeFantasia, cnpj, cep } = this.state;
        const empresa = { nomeFantasia, cnpj, cep };
        
        if(!this.state.nomeFantasia) {
            messages.mensgemErro('O campo Nome Fantasia é obrigatório.');
            return false;
        }
        if(!this.state.cnpj) {
            messages.mensgemErro('O campo CNPJ é obrigatório.');
            return false;
        }
        if(!this.state.cep) {
            messages.mensgemErro('O campo CEP é obrigatório.');
            return false;
        }        
        
        this.service
        .insert(empresa)
        .then(response => {
            this.props.history.push('/consult-empresa')
            messages.mensgemSucesso('Empresa cadastrada com sucesso.')
        }).catch (error => {
            messages.mensgemErro(error.response.data);
        })
    }

    update = () => {
        // Destructor operator
        const { nomeFantasia, cnpj, cep,  id } = this.state;
        const empresa = { nomeFantasia, cnpj, cep, id };        

        this.service
        .update(empresa)
        .then(response => {
            this.props.history.push('/consult-empresa')
            messages.mensgemSucesso('Empresa atualizada com sucesso.')
        }).catch (error => {
            messages.mensgemErro(error.response.data);
        })
    } 

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name] : value})
    }

    render() {

        return(
            <Card title={this.state.atualizando ? 'Atualizar Empresa' : 'Cadastrar Empresa'}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputNomeFantasia" label="Nome Fantasia: *">
                            <input  type="text" id="inputNomeFantasia" 
                                    className="form-control"
                                    name="nomeFantasia"
                                    value={this.state.nomeFantasia}
                                    onChange={this.handleChange} />
                        </FormGroup>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputCnpj" label="CNPJ: *">
                            <input type="text" id="inputCnpj" 
                                   className="form-control"
                                   name="cnpj"
                                   value={this.state.cnpj}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup id="inputCep" label="CEP: *">
                            <input type="text" id="inputCep" 
                                   className="form-control"
                                   name="cep"
                                   value={this.state.cep}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="rows">
                        <div className="col-md-12">
                            {this.state.atualizando ?
                                (
                                    <button onClick={this.update} type="button" className="btn btn-success">Atualizar</button>
                                ) : (
                                    <button onClick={this.submit} type="button" className="btn btn-success">Salvar</button>
                                )
                            } <s></s>                    
                            <button onClick={e => this.props.history.push('/consult-empresa')} type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>                
            </Card>
        )
    }
}

export default withRouter(RegisterEmpresas);