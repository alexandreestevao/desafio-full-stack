import React from 'react'

//import currencyFormatter from 'currency-formatter'

export default props => {

    const rows = props.empresas.map( empresa => {
        return(
            <tr key={empresa.id}>
                <td>{empresa.nomeFantasia}</td>
                <td>{empresa.cnpj}</td>
                <td>{empresa.cep}</td>
                <td>
                    <button type="button" 
                            className="btn btn-warning"
                            onClick={e => props.editar(empresa.id)}>
                            Editar
                    </button> <s></s>
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={e => props.deletar(empresa)}>
                            Deletar
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                      <th scope="col">Nome Fantasia</th>
                      <th scope="col">CNPJ</th>
                      <th scope="col">CEP</th>
                      <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}