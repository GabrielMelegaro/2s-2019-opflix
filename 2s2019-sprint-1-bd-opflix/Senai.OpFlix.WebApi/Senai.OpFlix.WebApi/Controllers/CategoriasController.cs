using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private ICategoriaRepository CategoriasRepository { get; set; }

        public CategoriasController()
        {
            CategoriasRepository = new CategoriaRepository();
        }
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(CategoriasRepository.Listar());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult Cadastrar(Categoria Categorias)
        {
            try
            {
                //Categorias.IdCategoria = IdCategoria.ToConvert
                //Categorias.Nome = Nome;
                CategoriasRepository.Cadastrar(Categorias);
                return Ok();
            }
            catch(System.Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            Categoria Categorias = CategoriasRepository.BuscarPorId(id);
            if (Categorias == null)
                return NotFound();
            return Ok(Categorias);
        }

        [Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult Atualizar(Categoria categorias)
        {
            try
            {
                Categoria CategoriaBuscada = CategoriasRepository.BuscarPorId(categorias.IdCategoria);
                if (CategoriaBuscada == null)
                    return NotFound();
                CategoriasRepository.Atualizar(categorias);
                    return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(new { mensagem = "Voce Errou haha Ma-Oê." });
            }
        }
    }
}