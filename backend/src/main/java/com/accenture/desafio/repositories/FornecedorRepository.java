package com.accenture.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.desafio.entities.Fornecedor;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long>{

}
