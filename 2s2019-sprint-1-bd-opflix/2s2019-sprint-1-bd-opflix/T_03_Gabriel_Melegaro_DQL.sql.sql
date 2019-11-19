Use T_OPflix

Select * from Permissao
select * from Usuarios
select * from Categoria
select * from Plataforma
select * from Sinopse
select * FROM Tipo
select * from Lancamento

delete from Sinopse
where IdSinopse = 27;

delete from Plataforma 
where IdPlataforma = 7;

create procedure ListarLancamento @Lancamento varchar(255)
as
select * from Lancamento 
Join Lancamento on Lancamento.Lancamento = Lancamento.Categoria
where Lancamento.NomeLancamento = @Lancamento;

EXEC ListarLancamento 'Ação';

create procedure ListarLancamento @Lancamento varchar(2000)
as
select * from Lancamento 
where Lancamento.IdLancamento = @Lancamento;

drop procedure ListarLancamento

EXEC ListarLancamento 'Terror';

create procedure Filtrar
@Categoria varchar(2000)
as
select NomeCategoria from Categoria
where NomeCategoria = @Categoria

drop procedure Filtrar

exec Filtrar 'Terror';
exec Filtrar 'Suspense';
exec Filtrar 'Comédia';
exec Filtrar 'Romance';
exec Filtrar 'Drama';
exec Filtrar 'SCI-FI';
exec Filtrar 'Ação';
exec Filtrar 'Documentário';
exec Filtrar 'Aventura';

alter table Lancamento
add fotoLanc varchar(2000) default 'https://bit.ly/2r3tLaz' not null;

update Lancamento set fotoLanc = 'https://bit.ly/2QxG2i0' where IdCategoria = 1;
update Lancamento set fotoLanc = 'https://bit.ly/35io1bO' where IdCategoria = 3;
update Lancamento set fotoLanc = 'https://bit.ly/2rRYHL4' where IdCategoria = 2;
update Lancamento set fotoLanc = 'https://bit.ly/2r3tLaz' where IdCategoria = 9;
update Lancamento set fotoLanc = 'https://bit.ly/2rRYHL4' where IdCategoria = 3;
update Lancamento set fotoLanc = 'https://bit.ly/2r3tLaz' where IdCategoria = 7;
update Lancamento set fotoLanc = 'https://bit.ly/2OqxcQC' where IdCategoria = 9;
update Lancamento set fotoLanc = 'https://bit.ly/359fPKO' where IdCategoria = 7;
update Lancamento set fotoLanc = 'https://bit.ly/2KAKRU0' where IdCategoria = 8;
update Lancamento set fotoLanc = 'https://bit.ly/37knmrU' where IdCategoria = 5;

drop table Lancamento
