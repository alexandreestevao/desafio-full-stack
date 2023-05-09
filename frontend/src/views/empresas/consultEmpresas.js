import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card'
// import FormGroup from '../../components/form-group'
import TableEmpresas from './tableEmpresas'
import EmpresaService from '../../app/services/empresaService'

import * as messages from '../../components/toastr';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

class ConsultEmpresas extends React.Component {

    state = {
        nomeFantasia: '',
        cnpj: '',
        cep: '',
        showConfirmDialog: false,
        empresaDeletar: {},
        empresas: []
    }

    constructor() {
        super();
        this.service = new EmpresaService();
    }

    consultar = () => {
        const empresaFilter = {
            nomeFantasia: this.state.nomeFantasia,
            cnpj: this.state.cnpj,
            cep: this.state.cep
        }

        this.service
                .findByParams(empresaFilter)
                .then( resposta => {
                    this.setState({empresas: resposta.data})
                }).catch(error => {
                    console.log(error)
                })
    }

    editar = (id) => {
        this.props.history.push(`/register-empresa/${id}`)
    }

    confirmar = (empresa) => {
        this.setState({showConfirmDialog: true, empresaDeletar: empresa})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, empresaDeletar: {}})
    }

    deletar = () => {
        this.service
            .deletar(this.state.empresaDeletar.id)
            .then (response => {
                const empresas = this.state.empresas;
                const index = this.state.empresas.indexOf(this.state.empresaDeletar)
                empresas.splice(index, 1);
                this.setState({empresas: empresas, showConfirmDialog: false})
                messages.mensgemSucesso('Empresa excluída com sucesso.')
            }).catch(error => {
                messages.mensgemErro('Ocorreu um erro ao tentar excluir a empresa.')
            })
    }

    preparaFormularioCadastro = () => {
        this.props.history.push('/register-empresa')
    }

    render() {
        const confirmDialogFooter = (
            <div>
                <Button label="Sim" icon="pi pi-check" onClick={this.deletar} />
                <Button label="Não" icon="pi pi-times" onClick={this.cancelarDelecao} />
            </div>
        );

        return(
            <Card title="Consultar Empresas">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            {/* <FormGroup htmlFor="inputNomeFantasia" label="Nome Fantasia:">
                                <input type="text"
                                        className="form-control"
                                        id="inputNomeFantasia"
                                        value={this.state.nomeFantasia}
                                        onChange={e => this.setState({nomeFantasia: e.target.value})}
                                        placeholder="Digite o Nome Fantasia" />
                            </FormGroup>
                            <FormGroup htmlFor="inputCnpj" label="CNPJ:">
                                <input type="Text"
                                        className="form-control"
                                        id="inputCnpj"
                                        value={this.state.cnpj}
                                        onChange={e => this.setState({cnpj: e.target.value})}
                                        placeholder="Digite o CNPJ" />
                            </FormGroup> 
                            <FormGroup htmlFor="inputCep" label="CEP:">
                                <input type="text"
                                        className="form-control"
                                        id="inputCep"
                                        value={this.state.cep}
                                        onChange={e => this.setState({cep: e.target.value})}
                                        placeholder="Digite o CEP" />
                            </FormGroup>                                                                                     */}
                            <button onClick={this.consultar} type="button" className="btn btn-primary">Listar Empresas</button> <s></s>
                            <button onClick={this.preparaFormularioCadastro} type="button" className="btn btn-info">Cadastrar</button>
                        </div>
                    </div>
                </div>
                < br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TableEmpresas empresas={this.state.empresas} 
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
                    <p>Confirma a exclusão da Empresa?</p>
                </Dialog>
                </div>
            </Card>                               
        )
    }

}

export default withRouter(ConsultEmpresas);