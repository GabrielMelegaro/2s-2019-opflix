using System;
using System.Collections.Generic;
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
    public class PlataformasController : ControllerBase
    {
        private IPlataformaRepository PlataformasRepository { get; set; }

        public PlataformasController()
        {
             PlataformasRepository = new PlataformaRepository();
        }
 
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(PlataformasRepository.Listar());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult Cadastrar(Plataforma Plataformas)
        {
            try
            {
                PlataformasRepository.Cadastrar(Plataformas);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            Plataforma Plataformas = PlataformasRepository.BuscarPorId(id);
            if (Plataformas == null)
                return NotFound();
            return Ok(Plataformas);
        }

        [Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult Atualizar(Plataforma plataformas)
        {
            try
            {
                Plataforma PlataformaBuscada = PlataformasRepository.BuscarPorId(plataformas.IdPlataforma);
                if (PlataformaBuscada == null)
                    return NotFound();
                PlataformasRepository.Atualizar(plataformas);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Voce Errou haha Ma-Oê." });
            }
        }
    }
}