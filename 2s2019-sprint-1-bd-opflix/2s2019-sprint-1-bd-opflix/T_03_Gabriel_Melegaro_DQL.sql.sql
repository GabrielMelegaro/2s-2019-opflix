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

create procedure ListarCategoria @Categoria varchar(255)
as
select * from Lancamento 
Join Categoria on Lancamento.Categoria = Categoria.IdCategoria
where Categoria.NomeCategoria = @Categoria;

EXEC ListarCategoria 'Ação';

create procedure ListarCategoria @Categoria varchar(2000)
as
select * from Lancamento 
Join Categoria on Lancamento.Categoria = Categoria.IdCategoria
where Categoria.NomeCategoria = @Categoria;

drop procedure ListarCategoria

EXEC ListarCategoria 'Terror';

create procedure Filtrar
@Categoria varchar(1000)
as
select * from Lancamento
where Lancamento.Categoria = @Categoria

exec Filtrar 'Terror';
exec Filtrar 'Ação';
exec Filtrar 'Suspense';
