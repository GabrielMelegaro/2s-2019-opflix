using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class LancamentoRepository : ILancamentoRepository
    {
        public List<Lancamento> Listar()
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Lancamento.ToList();
            }
        }

        public void Cadastrar(Lancamento lancamentos)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Lancamento.Add(lancamentos);
                ctx.SaveChanges();
            }
        }

        public Lancamento BuscarPorId(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Lancamento.Find(id);
            }
        }

        public void Atualizar(Lancamento lancamentos)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Lancamento LancamentoBuscado = ctx.Lancamento.FirstOrDefault(x => x.IdLancamento == lancamentos.IdLancamento);
                LancamentoBuscado.Titulo = lancamentos.Titulo;
                ctx.Lancamento.Update(LancamentoBuscado);
                ctx.SaveChanges();
            }
        }

        //public void Deletar(int id)
        //{
        //    using (OpFlixContext ctx = new OpFlixContext())
        //    {
        //        Lancamento LancamentoBuscado = ctx.Lancamento.Find(id);
        //        ctx.Lancamento.Remove(LancamentoBuscado);
        //        ctx.SaveChanges();   
        //    }
        //}

        public void Deletar(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Lancamento LancamentoBuscado = ctx.Lancamento.Find(id);
                ctx.Lancamento.Remove(LancamentoBuscado);
                ctx.SaveChanges();
            }
        }
    }
}
