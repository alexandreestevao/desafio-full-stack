package com.accenture.desafio.services;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.accenture.desafio.entities.Empresa;
import com.accenture.desafio.repositories.EmpresaRepository;
import com.accenture.desafio.services.exceptions.DatabaseException;
import com.accenture.desafio.services.exceptions.ResourceNotFoundException;

@Service
public class EmpresaService {

	@Autowired
	private EmpresaRepository repository;
	
	public List<Empresa> findAll() {
		return repository.findAll();
	}
	
	public Empresa findById(Long id) {
		Optional<Empresa> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Empresa insert(Empresa obj) {
		obj.setMoment(Instant.now());
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		Optional<Empresa> entity = repository.findById(id);
		if(!entity.isPresent()) {
			throw new ResourceNotFoundException(id);
		}
		try {
			repository.deleteById(id);	
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}		
	}
	
	public Empresa update(Long id, Empresa obj) {
		try {
			Optional<Empresa> entity = repository.findById(id);
			Empresa objEmpresa = entity.get();
			objEmpresa.setId(id);
			objEmpresa.setNomeFantasia(obj.getNomeFantasia());
			objEmpresa.setCnpj(obj.getCnpj());
			objEmpresa.setCep(obj.getCep());
			objEmpresa.setMoment(Instant.now());
			return repository.save(objEmpresa);
		} catch (RuntimeException e) {
			throw new ResourceNotFoundException(id);
		}

	}

}
