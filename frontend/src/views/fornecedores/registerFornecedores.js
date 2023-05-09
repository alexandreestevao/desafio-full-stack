import React from 'react';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import * as messages from '../../components/toastr';

import {withRouter } from 'react-router-dom';

import FornecedorService from '../../app/services/fornecedorService';

class RegisterFornecedores extends React.Component {

    state = {
        id: null,
        cpfCnpj: '',
        rg: '',
        dataNascimento: '',
        nome: '',
        email: '',
        cep: '',
        atualizando: false
    }

    constructor() {
        super();
        this.service = new FornecedorService();
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
        const { cpfCnpj, rg, dataNascimento, nome, email, cep } = this.state;
        const fornecedor = { cpfCnpj, rg, dataNascimento, nome, email, cep };
        
        if(!this.state.nome) {
            messages.mensgemErro('O campo Nome é obrigatório.');
            return false;
        }    
        if(!this.state.cpfCnpj) {
            messages.mensgemErro('O campo CPF/CNPJ é obrigatório.');
            return false;
        }
        if(!this.state.rg) {
            messages.mensgemErro('O campo RG é obrigatório.');
            return false;
        }       
        if(!this.state.cep) {
            messages.mensgemErro('O campo CEP é obrigatório.');
            return false;
        }     
        if(!this.state.email) {
            messages.mensgemErro('O campo E-mail é obrigatório.');
            return false;
        }            
        if(!this.state.dataNascimento) {
            messages.mensgemErro('O campo Data Nascimento é obrigatório.');
            return false;
        } 

        this.service
        .insert(fornecedor)
        .then(response => {
            this.props.history.push('/consult-fornecedor')
            messages.mensgemSucesso('Fornecedor cadastrado com sucesso.')
        }).catch (error => {
            messages.mensgemErro(error.response.data);
        })
    }

    update = () => {
        // Destructor operator
        const { id, cpfCnpj, rg, dataNascimento, nome, email, cep } = this.state;
        const fornecedor = { id, cpfCnpj, rg, dataNascimento, nome, email, cep };        

        this.service
        .update(fornecedor)
        .then(response => {
            this.props.history.push('/consult-fornecedor')
            messages.mensgemSucesso('Fornecedor atualizado com sucesso.')
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
            <Card title={this.state.atualizando ? 'Atualizar Fornecedor' : 'Cadastrar Fornecedor'}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputNome" label="Nome: *">
                            <input  type="text" id="inputNome" 
                                    className="form-control"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.handleChange} />
                        </FormGroup>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputCpfCnpj" label="CPF/CNPJ: *">
                            <input type="text" id="inputCpfCnpj" 
                                   className="form-control"
                                   name="cpfCnpj"
                                   value={this.state.cpfCnpj}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputRg" label="RG: *">
                            <input type="text" id="inputRg" 
                                   className="form-control"
                                   name="rg"
                                   value={this.state.rg}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>                      
                    <div className="col-md-4">
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
                    <div className="col-md-6">
                        <FormGroup id="inputEmail" label="E-mail: *">
                            <input  type="text" id="inputEmail" 
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                        </FormGroup>
                    </div>    
                    <div className="col-md-3">
                        <FormGroup id="inputNascimento" label="Data Nascimento: *">
                            <input  type="text" id="inputNascimento" 
                                    className="form-control"
                                    name="dataNascimento"
                                    value={this.state.dataNascimento}
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
                            <button onClick={e => this.props.history.push('/consult-fornecedor')} type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>                
            </Card>
        )
    }
}

export default withRouter(RegisterFornecedores);