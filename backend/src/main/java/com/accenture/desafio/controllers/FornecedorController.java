package com.accenture.desafio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.desafio.entities.Fornecedor;
import com.accenture.desafio.repositories.FornecedorRepository;

@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorController {
	
	@Autowired
	private FornecedorRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Fornecedor>> findAll() {
		List<Fornecedor> fornecedores = repository.findAll();
		return ResponseEntity.ok().body(fornecedores);
	}

}
