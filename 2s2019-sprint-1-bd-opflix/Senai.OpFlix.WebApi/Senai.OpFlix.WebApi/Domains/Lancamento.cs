using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Lancamento
    {
        public int IdLancamento { get; set; }
        public string Titulo { get; set; }
        public int? IdSinopse { get; set; }
        public TimeSpan? Duracao { get; set; }
        public int? IdCategoria { get; set; }
        public int? IdTipo { get; set; }
        public DateTime? DataLancamento { get; set; }
        public int? IdPlataforma { get; set; }

        public Categoria IdCategoriaNavigation { get; set; }
        public Plataforma IdPlataformaNavigation { get; set; }
        public Sinopse IdSinopseNavigation { get; set; }
        public Tipo IdTipoNavigation { get; set; }
    }
}
