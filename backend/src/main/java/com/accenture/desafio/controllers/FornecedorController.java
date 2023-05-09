package com.accenture.desafio.controllers;

import java.net.URI;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.accenture.desafio.entities.Fornecedor;
import com.accenture.desafio.services.FornecedorService;

@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorController {
	
	@Autowired
	private FornecedorService service;
	
	@GetMapping
	public ResponseEntity<List<Fornecedor>> findAll() {
		List<Fornecedor> fornecedores = service.findAll();
		return ResponseEntity.ok().body(fornecedores);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Fornecedor> findById(@PathVariable Long id) {
		Fornecedor obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping
	public ResponseEntity<Fornecedor> insert(@RequestBody Fornecedor obj) {
		Fornecedor fornecedor = service.findByCpfCnpjIgnoreCase(obj.getCpfCnpj());
		
		if(fornecedor==null) {
			obj = service.insert(obj);
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(obj.getId()).toUri();
			return ResponseEntity.created(uri).body(obj);
		} else {
			return ResponseEntity.ok().body(obj);
		}		
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Fornecedor> update(@PathVariable Long id, @RequestBody Fornecedor obj) {
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping(value = "/search")
	public ResponseEntity<List<Fornecedor>> findByNomeIgnoreCaseOrCpfCnpjIgnoreCase(
			@PathParam(value = "nome") String nome, 
			@PathParam(value = "cpfCnpj") String cpfCnpj) {					
		List<Fornecedor> list = service.findByNomeIgnoreCaseOrCpfCnpjIgnoreCase(nome, cpfCnpj);
		return ResponseEntity.ok().body(list);
	}
	
}
