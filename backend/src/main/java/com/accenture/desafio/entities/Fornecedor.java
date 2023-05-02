package com.accenture.desafio.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_fornecedor")
public class Fornecedor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String cpfCnpj;
	private String rg;
	private Integer dataNascimento;
	private String nome;
	private String email;
	private String cep;
	private Instant data;

	
	@ManyToMany(mappedBy = "fornecedores", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<Empresa> empresas = new HashSet<>();
	
	public Fornecedor() {
		
	}

	public Fornecedor(Long id, String cpfCnpj, String rg, Integer dataNascimento, String nome, String email, String cep,
			Instant data) {
		this.id = id;
		this.cpfCnpj = cpfCnpj;
		this.rg = rg;
		this.dataNascimento = dataNascimento;
		this.nome = nome;
		this.email = email;
		this.cep = cep;
		this.data = data;
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
	
	public Set<Empresa> getEmpresas() {
		return empresas;
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
		Fornecedor other = (Fornecedor) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Fornecedor [id=" + id + ", cpfCnpj=" + cpfCnpj + ", rg=" + rg + ", dataNascimento=" + dataNascimento
				+ ", nome=" + nome + ", email=" + email + ", cep=" + cep + ", data=" + data + "]";
	}

}
