package com.accenture.desafio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accenture.desafio.entities.Fornecedor;
import com.accenture.desafio.repositories.FornecedorRepository;

@Service
public class FornecedorService {
	
	@Autowired
	private FornecedorRepository repository;
	
	public List<Fornecedor> findAll() {
		return repository.findAll();
	}
	
	public Fornecedor findById(Long id) {
		Optional<Fornecedor> obj = repository.findById(id);
		return obj.get();
	}
	
	public Fornecedor insert(Fornecedor obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Fornecedor update(Long id, Fornecedor obj) {
		Optional<Fornecedor> entity = repository.findById(id);
		if(!entity.isPresent()) {
			System.out.println("Fornecedor de ID "+id+" não encontrado!");
			return null;
		}		
		Fornecedor objFornecedor = entity.get();
		objFornecedor.setId(id);
		objFornecedor.setCpfCnpj(obj.getCpfCnpj());
		objFornecedor.setRg(obj.getRg());
		objFornecedor.setDataNascimento(obj.getDataNascimento());
		objFornecedor.setNome(obj.getNome());
		objFornecedor.setEmail(obj.getEmail());
		objFornecedor.setCep(obj.getCep());
		objFornecedor.setData(obj.getData());
		return repository.save(objFornecedor);
	}

}
