create database T_OPflix

use T_OPflix

drop table Usuarios

create table Usuarios
(
	IdUsuario INT PRIMARY KEY IDENTITY
	,Nome varchar(255) not null
	,Email varchar(255) not null
	,Senha varchar(255) not null
	,Permissao varchar(255) not null
);
create table Categoria 
(
	IdCategoria int primary key identity
	,Nome varchar(255) not null 
);

create table Plataforma
(
	IdPlataforma int primary key identity
	,Nome varchar(255) not null
);

alter table dbo.Sinopse add Descricao varchar(2000);

create table Sinopse
(
	IdSinopse int primary key identity
	,Descricao varchar(2000) not null
);

alter table dbo.Sinopse drop column Descricao;

select * from Sinopse

create table Tipo
(
	IdTipo int primary key identity
	,Estilo varchar(255) not null
);
create table Lancamento
(
	IdLancamento int primary key identity
	,Titulo varchar(255) not null
	,IdSinopse int foreign key references Sinopse(IdSinopse)
	,Duracao Time not null
	,IdCategoria int foreign key references Categoria(IdCategoria)
	,IdTipo int foreign key references Tipo(IdTipo)
	,DataLancamento date not null
	,IdPlataforma int foreign key references Plataforma(IdPlataforma)
);

alter table dbo.Usuarios add Permissao varchar(255);
select * from Usuarios;

ALTER TABLE dbo.Usuarios DROP COLUMN Permissao;

SELECT * FROM Lancamento