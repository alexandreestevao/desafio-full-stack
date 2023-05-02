package com.accenture.desafio.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_empresa")
public class Empresa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomeFantasia;
	private String cnpj;
	private String cep;
	
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "tb_empresa_fornecedor", 
	joinColumns = @JoinColumn(name = "empresa_id"),
	inverseJoinColumns = @JoinColumn(name = "fornecedor_id"))
	private Set<Fornecedor> fornecedores = new HashSet<>();
	
	public Empresa() {		
	}

	public Empresa(Long id, String nomeFantasia, String cnpj, String cep) {
		this.id = id;
		this.nomeFantasia = nomeFantasia;
		this.cnpj = cnpj;
		this.cep = cep;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}	

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
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
	
	public Set<Fornecedor> getFornecedores() {
		return fornecedores;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Empresa other = (Empresa) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Empresa [id=" + id + ", nomeFantasia=" + nomeFantasia + ", cnpj=" + cnpj + ", cep=" + cep
				+ ", fornecedores=" + fornecedores + "]";
	}

}
