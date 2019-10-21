﻿using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    public interface IPlataformaRepository
    {
        List<Plataforma> Listar();
        void Cadastrar(Plataforma categoria);
        void Atualizar(Plataforma categoria);
        Plataforma BuscarPorId(int id);
    }
}
