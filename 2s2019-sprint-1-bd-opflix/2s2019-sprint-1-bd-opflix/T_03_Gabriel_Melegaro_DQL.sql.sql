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
Join Categoria on Lancamento.IdCategoria = Categoria.IdCategoria
where Categoria.Nome = @Categoria;

EXEC ListarCategoria 'Ação';

create procedure ListarCategoria @Categoria varchar(255)
as
select * from Lancamento 
Join Categoria on Lancamento.IdCategoria = Categoria.IdCategoria
where Categoria.Nome = @Categoria;

EXEC ListarCategoria 'Terror';


