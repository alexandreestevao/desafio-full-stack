package com.accenture.desafio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.desafio.entities.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

}
