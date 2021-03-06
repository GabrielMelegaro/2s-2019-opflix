﻿using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    public interface ILancamentoRepository
    {
        List<Lancamento> Listar();
        void Cadastrar(Lancamento lancamento);
        void Atualizar(Lancamento lancamento);
        void Deletar(int id);
        Lancamento BuscarPorId(int id);
    }


}
