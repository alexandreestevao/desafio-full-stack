import ApiService from '../api-service'

export default class FornecedorService extends ApiService{

    constructor() {
        super('/fornecedores')
    }

    obterPorId(id) {
        return this.get(`/${id}`);
    }

    insert(fornecedor) {
        return this.post('/', fornecedor);
    }

    update(fornecedor) {
        return this.put(`/${fornecedor.id}`, fornecedor);
    }  
    
    deletar(id) {
        return this.delete(`/${id}`)
    }
    
    findByParams(fornecedorFilter) {
        let params = `?nome=${fornecedorFilter.nome}`

        if(fornecedorFilter.cpfCnpj) {
            params = `${params}&cpfCnpj=${fornecedorFilter.cpfCnpj}`
        }

        if(fornecedorFilter.rg) {
            params = `${params}&rg=${fornecedorFilter.rg}`
        }

        if(fornecedorFilter.dataNascimento) {
            params = `${params}&dataNascimento=${fornecedorFilter.dataNascimento}`
        }

        if(fornecedorFilter.cep) {
            params = `${params}&cep=${fornecedorFilter.cep}`
        }

        if(fornecedorFilter.email) {
            params = `${params}&email=${fornecedorFilter.email}`
        }

        return this.get(params)
    }

    findByParamsNomeCpfCnpj(fornecedorFilter) {
        let params = `/search?nome=${fornecedorFilter.nome}`

        if(fornecedorFilter.cpfCnpj) {
            params = `${params}&cpfCnpj=${fornecedorFilter.cpfCnpj}`
        }

        return this.get(params)
    }


}