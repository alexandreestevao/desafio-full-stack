import ApiService from '../api-service'

export default class EmpresaService extends ApiService{

    constructor() {
        super('/empresas')
    }

    obterPorId(id) {
        return this.get(`/${id}`);
    }

    insert(empresa) {
        return this.post('/', empresa);
    }

    update(empresa) {
        return this.put(`/${empresa.id}`, empresa);
    }  
    
    deletar(id) {
        return this.delete(`/${id}`)
    }

    findByParams(empresaFilter) {
        let params = `?nomeFantasia=${empresaFilter.nomeFantasia}`

        if(empresaFilter.cnpj) {
            params = `${params}&cnpj=${empresaFilter.cnpj}`
        }

        if(empresaFilter.cep) {
            params = `${params}&cep=${empresaFilter.cep}`
        }

        return this.get(params)
    }

}