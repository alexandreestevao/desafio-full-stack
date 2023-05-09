import React from 'react'

export default props => {

    const rows = props.fornecedores.map( fornecedor => {
        return(
            <tr key={fornecedor.id}>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.cpfCnpj}</td>
                <td>{fornecedor.rg}</td>
                <td>{fornecedor.dataNascimento}</td>                
                <td>{fornecedor.email}</td>
                <td>{fornecedor.cep}</td>
                <td>
                    <button type="button" 
                            className="btn btn-warning btn-sm"
                            onClick={e => props.editar(fornecedor.id)}>
                            Editar
                    </button> <s></s>
                    <button type="button" 
                            className="btn btn-danger btn-sm"
                            onClick={e => props.deletar(fornecedor)}>
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
                      <th scope="col">Nome</th>
                      <th scope="col">CPF/CNPJ</th>
                      <th scope="col">RG</th>
                      <th scope="col">Nascimento</th>
                      <th scope="col">E-mail</th>
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