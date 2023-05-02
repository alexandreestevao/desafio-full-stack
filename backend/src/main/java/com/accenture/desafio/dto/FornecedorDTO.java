package com.accenture.desafio.dto;

import java.time.Instant;

import com.accenture.desafio.entities.Fornecedor;

public class FornecedorDTO {
	
	private Long id;
	private String cpfCnpj;
	private String rg;
	private Integer dataNascimento;
	private String nome;
	private String email;
	private String cep;
	private Instant data;
	
	public FornecedorDTO() {
		
	}

	public FornecedorDTO(Long id, String cpfCnpj, String rg, Integer dataNascimento, String nome, String email,
			String cep, Instant data) {
		this.id = id;
		this.cpfCnpj = cpfCnpj;
		this.rg = rg;
		this.dataNascimento = dataNascimento;
		this.nome = nome;
		this.email = email;
		this.cep = cep;
		this.data = data;
	}

	public FornecedorDTO(Fornecedor fornecedor) {
		id = fornecedor.getId();
		cpfCnpj = fornecedor.getCpfCnpj();
		rg = fornecedor.getRg();
		dataNascimento = fornecedor.getDataNascimento();
		nome = fornecedor.getNome();
		email = fornecedor.getEmail();
		cep = fornecedor.getCep();
		data = fornecedor.getData();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCpfCnpj() {
		return cpfCnpj;
	}

	public void setCpfCnpj(String cpfCnpj) {
		this.cpfCnpj = cpfCnpj;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Integer getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Integer dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public Instant getData() {
		return data;
	}

	public void setData(Instant data) {
		this.data = data;
	}
	

}
