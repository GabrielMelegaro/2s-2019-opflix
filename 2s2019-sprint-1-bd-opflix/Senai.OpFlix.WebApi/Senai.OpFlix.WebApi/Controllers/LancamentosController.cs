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
    public class LancamentosController : ControllerBase
    {
        private ILancamentoRepository LancamentoRepository { get; set; }

        public LancamentosController()
        {
            LancamentoRepository = new LancamentoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(LancamentoRepository.Listar());
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult Cadastrar(Lancamento Lancamentos)
        {
            try
            {
                LancamentoRepository.Cadastrar(Lancamentos);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize(Roles = "admin")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            Lancamento Lancamentos = LancamentoRepository.BuscarPorId(id);
            if (Lancamentos == null)
                return NotFound();
            return Ok(Lancamentos);
        }

        [Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult Atualizar(Lancamento lancamentos)
        {
            try
            {
                Lancamento LancamentoBuscado = LancamentoRepository.BuscarPorId(lancamentos.IdLancamento);
                if (LancamentoBuscado == null)
                    return NotFound();
                LancamentoRepository.Atualizar(lancamentos);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Voce Errou haha Ma-Oê." });
            }
        }

        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            LancamentoRepository.Deletar(id);
            return Ok();
        }
    }
}