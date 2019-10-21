using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Sinopse
    {
        public Sinopse()
        {
            Lancamento = new HashSet<Lancamento>();
        }

        public int IdSinopse { get; set; }
        public string Descricao { get; set; }

        public ICollection<Lancamento> Lancamento { get; set; }
    }
}
