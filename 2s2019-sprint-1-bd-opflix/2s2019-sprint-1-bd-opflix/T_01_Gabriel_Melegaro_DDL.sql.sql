create database T_OPflix

use T_OPflix

drop table Usuarios

create table Usuarios
(
	IdUsuario INT PRIMARY KEY IDENTITY
	,Nome varchar(255) not null
	,Email varchar(255) not null
	,Senha varchar(255) not null
	,Permissao varchar(255) default 'comum'
);

drop table Usuarios

select * from Usuarios

create table Categoria 
(
	IdCategoria int primary key identity
	,NomeCategoria varchar(255) not null 
);

drop table Categoria

create table Plataforma
(
	IdPlataforma int primary key identity
	,NomePlataforma varchar(255) not null
);

drop table Plataforma

alter table dbo.Sinopse add Descricao varchar(2000);

create table Sinopse
(
	IdSinopse int primary key identity
	,Descricao varchar(2000) not null
);

drop table Sinopse

alter table dbo.Sinopse drop column Descricao;

select * from Sinopse

create table Tipo
(
	IdTipo int primary key identity
	,NomeTipo varchar(255) not null
);

drop table Tipo
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

drop table Lancamento

alter table dbo.Usuarios add Permissao varchar(255);
select * from Usuarios;

ALTER TABLE dbo.Usuarios DROP COLUMN Permissao;

SELECT * FROM Lancamento