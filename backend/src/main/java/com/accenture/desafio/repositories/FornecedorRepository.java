package com.accenture.desafio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.desafio.entities.Fornecedor;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long>{
	
	List<Fornecedor> findByNomeIgnoreCaseAndCpfCnpjIgnoreCase(String nome, String cpfcnpj);

	List<Fornecedor> findByNomeIgnoreCaseOrCpfCnpjIgnoreCase(String nome, String cpfcnpj);

}
