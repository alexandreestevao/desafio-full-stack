package com.accenture.desafio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.desafio.entities.Empresa;
import com.accenture.desafio.services.EmpresaService;

@RestController
@RequestMapping(value = "/empresas")
public class EmpresaController {
	
	@Autowired
	private EmpresaService service;
	
	@GetMapping
	public ResponseEntity<List<Empresa>> findAll() {
		List<Empresa> empresas = service.findAll();
		return ResponseEntity.ok().body(empresas);		
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Empresa> findById(@PathVariable Long id) {
		Empresa obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}

}
