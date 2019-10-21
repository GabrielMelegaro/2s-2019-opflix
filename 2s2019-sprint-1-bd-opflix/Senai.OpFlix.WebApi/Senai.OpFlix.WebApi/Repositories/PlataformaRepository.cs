using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class PlataformaRepository : IPlataformaRepository
    {
        public void Cadastrar(Plataforma plataformas)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Plataforma.Add(plataformas);
                ctx.SaveChanges();
            }
        }

        public List<Plataforma> Listar()
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Plataforma.ToList();
            }
        }

        public Plataforma BuscarPorId(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Plataforma.Find(id);
            }
        }

        public void Atualizar(Plataforma plataformas)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Plataforma PlataformaBuscada = ctx.Plataforma.FirstOrDefault(x => x.IdPlataforma == plataformas.IdPlataforma);
                PlataformaBuscada.Nome = plataformas.Nome;
                ctx.Plataforma.Update(PlataformaBuscada);
                ctx.SaveChanges();
            }
        }
    }
}
