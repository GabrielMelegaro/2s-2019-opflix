CREATE DATABASE T_Gufos

USE T_Gufos

CREATE TABLE Categorias(
	IdCategoria INT PRIMARY KEY IDENTITY not null
	,Nome Varchar (255)not null UNIQUE
);

CREATE TABLE Eventos(
	IdEvento INT PRIMARY KEY IDENTITY NOT NULL
	,Titulo Varchar(255) NOT NULL
	,Descrição text
	,DataEvento datetime not null
	,Ativo bit not null default(1)
	,Localizacao varchar(255) null
	,IdCategoria INT FOREIGN KEY REFERENCES Categorias (IdCategoria)
);

CREATE TABLE Usuarios(
	IdUsuario int identity primary key not null
	,Nome Varchar(255) not null
	,Email Varchar(255) not null
	,Senha Varchar(255) not null
	,Permissao Varchar(255) not null
);

CREATE TABLE Presencas(
	IdUsuario INT FOREIGN KEY REFERENCES Usuarios(IdUsuario)
	,IdEvento INT FOREIGN KEY REFERENCES Eventos(IdEvento)
);