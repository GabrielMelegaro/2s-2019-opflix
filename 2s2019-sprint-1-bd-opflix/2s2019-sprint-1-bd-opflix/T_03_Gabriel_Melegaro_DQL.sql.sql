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
Join Lancamento on Lancamento.Lancamento = Lancamento.Categoria
where Lancamento.NomeLancamento = @Lancamento;

drop procedure ListarLancamento

EXEC ListarLancamento 'Terror';

create procedure Filtrar
@Lancamento varchar(1000)
as
select * from Lancamento
where Lancamento.Lancamento = @Lancamento

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
add fotoLanc varchar(2000) default 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbo85a-snRHqCuadvtZLP8EOujq9uFCUSsZuomsTAfFcTbufr8' not null;

update Lancamento set fotoLanc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkrR6z9jFY2h1Kpx3RJemnqZCdOiTZZFvbM3G14sWO8E2dZhK8' where IdCategoria = 1;
update Lancamento set fotoLanc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhfcuYOZEplYHgWC1CBATh93caEdMJoZaDu0fbemNBHfgzs8fI' where IdCategoria = 2;
update Lancamento set fotoLanc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWr0hOY_27m2Gzrz7ergGXQcPZrkcHPx7kEiZ8LguLCZF09rR3' where IdCategoria = 3;
update Lancamento set fotoLanc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQULDdCOZE7XSNRP72-NBwYTr06Fw4KZm1NF1kqp--W-OQ_VFh6' where IdCategoria = 7;
update Lancamento set fotoLanc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWr0hOY_27m2Gzrz7ergGXQcPZrkcHPx7kEiZ8LguLCZF09rR3' where IdCategoria = 5;
update Lancamento set fotoLanc = 'https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/8/4/e/6/84e6c0f13dae4998b2d2ad1182b9dde2.jpg' where IdCategoria =  7;
update Lancamento set fotoLanc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfp_f6uDWctQk6l2omZbgbZCFQzHj--ql_x0I8hVeYXcOOExs9' where IdCategoria =  8;
update Lancamento set fotoLanc = 'http://br.web.img2.acsta.net/c_215_290/pictures/19/03/27/21/03/0464387.jpg' where IdCategoria =  9;

