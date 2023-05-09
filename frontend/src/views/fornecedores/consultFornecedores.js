import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import TableFornecedores from './tableFornecedores'
import FornecedorService from '../../app/services/fornecedorService'

import * as messages from '../../components/toastr';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

class ConsultFornecedores extends React.Component {

    state = {
        cpfCnpj: '',
        rg: '',
        dataNascimento: '',
        nome: '',
        email: '',
        cep: '',
        showConfirmDialog: false,
        fornecedorDeletar: {},
        fornecedores: []
    }

    constructor() {
        super();
        this.service = new FornecedorService();
    }

    consultar = () => {
        const fornecedorFilter = {
            nome: this.state.nome,
            cpfCnpj: this.state.cpfCnpj,
            rg: this.state.rg,
            dataNascimento: this.state.dataNascimento,
            email: this.state.email,            
            cep: this.state.cep
        }

        this.service
                .findByParams(fornecedorFilter)
                .then( resposta => {
                    this.setState({fornecedores: resposta.data})
                }).catch(error => {
                    console.log(error)
                })
    }

    consultarPorParams = () => {
        const fornecedorFilter = {
            nome: this.state.nome,
            cpfCnpj: this.state.cpfCnpj
        }

        this.service
                .findByParamsNomeCpfCnpj(fornecedorFilter)
                .then( resposta => {
                    this.setState({fornecedores: resposta.data})
                }).catch(error => {
                    console.log(error)
                })
    }    

    editar = (id) => {
        this.props.history.push(`/register-fornecedor/${id}`)
    }

    confirmar = (fornecedor) => {
        this.setState({showConfirmDialog: true, fornecedorDeletar: fornecedor})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, fornecedorDeletar: {}})
    }

    deletar = () => {
        this.service
            .deletar(this.state.fornecedorDeletar.id)
            .then (response => {
                const fornecedores = this.state.fornecedores;
                const index = this.state.fornecedores.indexOf(this.state.fornecedorDeletar)
                fornecedores.splice(index, 1);
                this.setState({fornecedores: fornecedores, showConfirmDialog: false})
                messages.mensgemSucesso('Fornecedor excluído com sucesso.')
            }).catch(error => {
                messages.mensgemErro('Ocorreu um erro ao tentar excluir o fornecedor.')
            })
    }

    preparaFormularioCadastro = () => {
        this.props.history.push('/register-fornecedor')
    }

    render() {
        const confirmDialogFooter = (
            <div>
                <Button label="Sim" icon="pi pi-check" onClick={this.deletar} />
                <Button label="Não" icon="pi pi-times" onClick={this.cancelarDelecao} />
            </div>
        );

        return(
            <Card title="Consultar Fornecedores">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputNome" label="Nome:">
                                <input type="text"
                                        className="form-control"
                                        id="inputNome"
                                        value={this.state.nome}
                                        onChange={e => this.setState({nome: e.target.value})}
                                        placeholder="Digite o Nome" />
                            </FormGroup>
                            <FormGroup htmlFor="inputCpfCnpj" label="CPF/CNPJ:">
                                <input type="Text"
                                        className="form-control"
                                        id="inputCpfCnpj"
                                        value={this.state.cpfCnpj}
                                        onChange={e => this.setState({cpfCnpj: e.target.value})}
                                        placeholder="Digite o CPF/CNPJ" />
                            </FormGroup> 
                            {/* <FormGroup htmlFor="inputRg" label="RG:">
                                <input type="Text"
                                        className="form-control"
                                        id="inputRg"
                                        value={this.state.rg}
                                        onChange={e => this.setState({rg: e.target.value})}
                                        placeholder="Digite o RG" />
                            </FormGroup>   
                            <FormGroup htmlFor="inputNascimento" label="Data Nascimento:">
                                <input type="Text"
                                        className="form-control"
                                        id="inputNascimento"
                                        value={this.state.dataNascimento}
                                        onChange={e => this.setState({dataNascimento: e.target.value})}
                                        placeholder="Digite o Data Nascimento" />
                            </FormGroup>   
                            <FormGroup htmlFor="inputEmail" label="E-mail:">
                                <input type="Text"
                                        className="form-control"
                                        id="inputEmail"
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.target.value})}
                                        placeholder="Digite o E-mail" />
                            </FormGroup>                                                                                   
                            <FormGroup htmlFor="inputCep" label="CEP:">
                                <input type="text"
                                        className="form-control"
                                        id="inputCep"
                                        value={this.state.cep}
                                        onChange={e => this.setState({cep: e.target.value})}
                                        placeholder="Digite o CEP" />
                            </FormGroup>                                                                                     */}
                            <button onClick={this.consultarPorParams} type="button" className="btn btn-primary">Buscar</button> <s></s>
                            <button onClick={this.preparaFormularioCadastro} type="button" className="btn btn-info">Cadastrar</button>
                        </div>
                    </div>
                </div>
                < br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TableFornecedores fornecedores={this.state.fornecedores} 
                                              deletar={this.confirmar}
                                              editar={this.editar} />    
                        </div>
                    </div>
                </div>
                <div>
                <Dialog header="Confirmação de Exclusão" 
                        visible={this.state.showConfirmDialog} 
                        style={{ width: '50vw' }} 
                        modal={true}
                        footer={confirmDialogFooter} 
                        onHide={() => this.setState({showConfirmDialog: false})}>
                    <p>Confirma a exclusão do Fornecedor?</p>
                </Dialog>
                </div>
            </Card>                               
        )
    }

}

export default withRouter(ConsultFornecedores);