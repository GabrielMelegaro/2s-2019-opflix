using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {

        public List<Categoria> Listar()
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Categoria.ToList();
            }
        }

        public void Cadastrar(Categoria categorias)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Categoria.Add(categorias);
                ctx.SaveChanges();
            }
        }
        public Categoria BuscarPorId(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Categoria.Find(id);
            }
        }

        public void Atualizar(Categoria categorias)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Categoria CategoriaBuscada = ctx.Categoria.FirstOrDefault(x => x.IdCategoria == categorias.IdCategoria);
                CategoriaBuscada.Nome = categorias.Nome;
                ctx.Categoria.Update(CategoriaBuscada);
                ctx.SaveChanges();
            }
        }
    }
}
