Use T_OPflix

insert into Usuarios(Nome,Email,Senha,Permissao)
values('Gabriel','g@gmail.com','123456','admin')

insert into Usuarios(Nome,Email,Senha,Permissao)
values('Helena','h@gmail.com','123456','admin')

update Usuarios SET Permissao = 3
where Nome = 'Helena';

update Usuarios SET Permissao = 3
where Email = 'h@gmail.com';

insert into Usuarios(Nome,Email,Senha,Permissao)
values('Roberto','r@gmail.com','123123','cliente')

insert into Usuarios(Nome,Email,Senha,Permissao)
values('Guilherme','guiga@gmail.com','112233','cliente')

delete from Usuarios
where IdUsuario = 4;

select * from Usuarios;


insert into Categoria values ('Terror')
							 ,('Suspense')
							 ,('Comédia');
insert into Categoria values ('Romance');
insert into Categoria values ('Drama');
insert into Categoria values ('SCI-FI');
insert into Categoria values ('Ação');
insert into Categoria values ('Documentário');
insert into Categoria values ('Aventura');

select * from Categoria;

insert into Plataforma (NomePlataforma) values ('Netflix')
									,('Globoplay')						
									,('Amazon')
									,('Now')
									,('VHS')
									,('Cinema')

select * from Plataforma;

delete from Plataforma
where IdPlataforma = 13;

insert into Sinopse(Descricao) values ('blahblahblah')

delete from Sinopse
where IdSinopse = 44;

Select * from Sinopse;

delete from Tipo
where IdTipo = 4;

insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('A Hora do Pesadelo','blahblahblah','02:12:00','Terror' ,'Filme','27-11-1986','VHS');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('Os Simpsons','blahblahblah','23:37:00','Comédia','Serie','17-12-1989','Amazon');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('La Casa De Papel 3','blahblahblah','12:53:00','Suspense','Serie','31-10-2010','Netflix');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('O Rei Leão','blahblahblah', '01:54:00','Aventura','Filme','08-07-1994','Cinema');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('O Retorno de Johnny English','blahblahblah','01:42:00','Comédia','Serie','28-10-2010','Now');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('Os Vingadores: Ultimato','blahblahblah','01:54:00','Ação','Filme','08-07-1994','Cinema');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('Toy Story 4','blahblahblah', '01:54:00','Aventura','Filme','08-07-1994','Cinema');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('Velozes & Furiosos: Hobbs e Shaw','blahblahblah','01:54:00','Ação','Filme','08-07-1994','Netflix');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('Guardioes da Galaxia','blahblahblah','01:54:00', 'Documentário','Filme','08-07-1994','Globoplay');
insert into Lancamento(Titulo,Sinopse,Duracao,Categoria,Tipo,DataLancamento,Plataforma) values('Guardioes da Galaxia Vol.2','blahblahblah','01:54:00','Drama','Filme','08-07-1994','Globoplay');
update Lancamento SET Titulo  =  'La Casa De Papel - 3º Temporada'
where IdLancamento = 54;

delete from Lancamento
where IdLancamento = 18;

select * from Lancamento;

insert into Cadastrar(Nome,Email,Senha) values ('gabriel','g@gmail.com','123456'),
											   ('helena','h@gmail.com','123456'),
insert into Cadastrar(Nome,Email,Senha) values ('Roberto','r@gmail.com','123123')

select * from Cadastrar