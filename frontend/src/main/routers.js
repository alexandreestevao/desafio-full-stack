import React from 'react'

import Home from '../views/home'
import ConsultFornecedores from '../views/fornecedores/consultFornecedores'
import RegisterFornecedores from '../views/fornecedores/registerFornecedores'
import ConsultEmpresas from '../views/empresas/consultEmpresas'
import RegisterEmpresas from '../views/empresas/registerEmpresas'

import { Route, Switch, HashRouter } from 'react-router-dom';

function Routers() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/consult-fornecedor" component={ConsultFornecedores} />
                <Route path="/register-fornecedor/:id?" component={RegisterFornecedores} />
                <Route path="/consult-empresa" component={ConsultEmpresas} />
                <Route path="/register-empresa/:id?" component={RegisterEmpresas} />
            </Switch>
        </HashRouter>
    )
}

export default Routers;