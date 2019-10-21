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

insert into Plataforma (Nome) values ('Netflix')
									,('Globoplay')						
									,('Amazon')
									,('Now')
									,('VHS')
									,('Cinema')

select * from Plataforma;

delete from Plataforma
where IdPlataforma = 13;

insert into Sinopse(Descricao) values ('Um grupo de adolescentes tem pesadelos horríveis, em que são atacados por um homem deformado com garras de aço. Ele apenas aparece durante o sono e, 
para escapar, é preciso acordar. Os crimes vão ocorrendo seguidamente, até que se descobre que o ser misterioso é na verdade Freddy Krueger, 
um homem que molestou crianças na rua Elm e que foi queimado vivo pela vizinhança. Agora, Krueger pode ter retornado para se vingar daqueles que o mataram, através do sono.')
						 ,('A série animada do horário nobre e a comédia há mais tempo no ar na história da televisão, “OS SIMPSONS” também é uma instituição cultural. 
						 Atualmente em sua 19ª temporada, “OS SIMPSONS” tem uma base de fãs dedicada e extremamente leal em todo o mundo. Com roteiros inteligentes, 
						 humor subversivo e divertidamente genial, a série faz piadas de si mesma e de todo mundo que aparecer em seu caminho. Criada por Matt Groening, 
						 a família Simpsons mora na cidade de Springfield.
						 Homer (voz de Dan Castellaneta) trabalha como inspetor de segurança num usina de energia nuclear. Marge (voz de Julie Kavner) tenta manter a paz em sua família. 
						 Bart (voz de Nancy Cartwright) é um travesso garoto de 10 anos. Lisa (voz de Yeardley Smith), 8, é a inteligente da família,
						 que adora tocar saxofone e é vegetariana. E a pequena Maggie conquista todos enquanto não larga sua chupeta. E a série tem um rico, e muitas vezes estranho,
						 universo de personagens que também habitam Springfield.')
						 ,('Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos.
						 O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.')
						 ,('Dez anos após a conquista da liberdade, César lidera uma nação de macacos geneticamente evoluídos, que está sendo ameaçada por um grupo de humanos sobrevivente 
						 de um vírus mortal.')
						 ,('Johnny English usa suas questionáveis habilidades em combate para proteger um líder chinês de um grupo de assassinos. Então, English usa seus aparelhos
						 de alta tecnologia para desmascarar uma conspiração antes da realização de um encontro de chefes de estado.');

delete from Sinopse
where IdSinopse = 44;

Select * from Sinopse;

delete from Tipo
where IdTipo = 4;

insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('A Hora do Pesadelo',1,'02:12:00',1,1,'27-11-1986',5);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('Os Simpsons',2,'23:37:00',3,1,'17-12-1989',1);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('La Casa De Papel 3',3,'12:53:00',2,1,'31-10-2010',1);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('O Rei Leão',4,'01:54:00',9,2,'08-07-1994',6);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('O Retorno de Johnny English',5,'01:42:00',3,2,'28-10-2010',4);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('Os Vingadores: Ultimato',4,'01:54:00',7,2,'08-07-1994',6);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('Toy Story 4',4,'01:54:00',9,2,'08-07-1994',6);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('Velozes & Furiosos: Hobbs e Shaw',4,'01:54:00',7,2,'08-07-1994',6);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('Guardioes da Galaxia',4,'01:54:00',8,2,'08-07-1994',2);
insert into Lancamento(Titulo,IdSinopse,Duracao,IdCategoria,IdTipo,DataLancamento,IdPlataforma) values('Guardioes da Galaxia Vol.2',4,'01:54:00',5,2,'08-07-1994',3);
update Lancamento SET Titulo  =  'La Casa De Papel - 3º Temporada'
where IdLancamento = 54;

delete from Lancamento
where IdLancamento = 74;

select * from Lancamento;

insert into Cadastrar(Nome,Email,Senha) values ('gabriel','g@gmail.com','123456'),
											   ('helena','h@gmail.com','123456'),
insert into Cadastrar(Nome,Email,Senha) values ('Roberto','r@gmail.com','123123')

select * from Cadastrar