package com.accenture.desafio.dto;

import com.accenture.desafio.entities.Empresa;

public class EmpresaDTO {
	
	private Long id;
	private String cnpj;
	private String cep;
	
	public EmpresaDTO() {
		
	}

	public EmpresaDTO(Long id, String cnpj, String cep) {
		this.id = id;
		this.cnpj = cnpj;
		this.cep = cep;
	}
	
	public EmpresaDTO(Empresa empresa) {
		id = empresa.getId();
		cnpj = empresa.getCnpj();
		cep = empresa.getCep();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
	
	

}
