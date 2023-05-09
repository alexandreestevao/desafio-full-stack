package com.accenture.desafio.services;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.accenture.desafio.entities.Fornecedor;
import com.accenture.desafio.repositories.FornecedorRepository;
import com.accenture.desafio.services.exceptions.DatabaseException;
import com.accenture.desafio.services.exceptions.ResourceNotFoundException;

@Service
public class FornecedorService {
	
	@Autowired
	private FornecedorRepository repository;
	
	public List<Fornecedor> findAll() {
		return repository.findAll();
	}
	
	public Fornecedor findById(Long id) {
		Optional<Fornecedor> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Fornecedor insert(Fornecedor obj) {
		obj.setMoment(Instant.now());
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		Optional<Fornecedor> entity = repository.findById(id);
		if(!entity.isPresent()) {
			throw new ResourceNotFoundException(id);
		}	
		try {
			repository.deleteById(id);	
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
	}
	
	public Fornecedor update(Long id, Fornecedor obj) {
		try {
			Optional<Fornecedor> entity = repository.findById(id);
			Fornecedor objFornecedor = entity.get();
			objFornecedor.setId(id);
			objFornecedor.setCpfCnpj(obj.getCpfCnpj());
			objFornecedor.setRg(obj.getRg());
			objFornecedor.setDataNascimento(obj.getDataNascimento());
			objFornecedor.setNome(obj.getNome());
			objFornecedor.setEmail(obj.getEmail());
			objFornecedor.setCep(obj.getCep());
			objFornecedor.setMoment(Instant.now());
			return repository.save(objFornecedor);
		} catch (RuntimeException e) {
			throw new ResourceNotFoundException(id);
		}

	}

	public List<Fornecedor> findByNomeIgnoreCaseOrCpfCnpjIgnoreCase(String nome, String cpfCnpj) {
		List<Fornecedor> result = repository.findByNomeIgnoreCaseOrCpfCnpjIgnoreCase(nome, cpfCnpj);
		return result;
	}
	
	public Fornecedor findByCpfCnpjIgnoreCase(String cpfCnpj) {
		Fornecedor fornecedor = repository.findByCpfCnpjIgnoreCase(cpfCnpj);
		return fornecedor;
	}

}
