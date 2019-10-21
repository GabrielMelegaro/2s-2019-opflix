using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class OpFlixContext : DbContext
    {
        public OpFlixContext()
        {
        }

        public OpFlixContext(DbContextOptions<OpFlixContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categoria> Categoria { get; set; }
        public virtual DbSet<Lancamento> Lancamento { get; set; }
        public virtual DbSet<Plataforma> Plataforma { get; set; }
        public virtual DbSet<Sinopse> Sinopse { get; set; }
        public virtual DbSet<Tipo> Tipo { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SqlExpress; Initial Catalog=T_OpFlix;User Id=sa;Pwd=132 ");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.HasKey(e => e.IdCategoria);

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Categori__7D8FE3B206F74F26")
                    .IsUnique();

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Lancamento>(entity =>
            {
                entity.HasKey(e => e.IdLancamento);

                entity.Property(e => e.DataLancamento).HasColumnType("date");

                entity.Property(e => e.Titulo)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Lancamento)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK__Lancament__IdCat__619B8048");

                entity.HasOne(d => d.IdPlataformaNavigation)
                    .WithMany(p => p.Lancamento)
                    .HasForeignKey(d => d.IdPlataforma)
                    .HasConstraintName("FK__Lancament__IdPla__6383C8BA");

                entity.HasOne(d => d.IdSinopseNavigation)
                    .WithMany(p => p.Lancamento)
                    .HasForeignKey(d => d.IdSinopse)
                    .HasConstraintName("FK__Lancament__IdSin__60A75C0F");

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.Lancamento)
                    .HasForeignKey(d => d.IdTipo)
                    .HasConstraintName("FK__Lancament__IdTip__628FA481");
            });

            modelBuilder.Entity<Plataforma>(entity =>
            {
                entity.HasKey(e => e.IdPlataforma);

                entity.Property(e => e.Nome)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sinopse>(entity =>
            {
                entity.HasKey(e => e.IdSinopse);

                entity.Property(e => e.Descricao)
                    .HasMaxLength(2000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tipo>(entity =>
            {
                entity.HasKey(e => e.IdTipo);

                entity.Property(e => e.Estilo)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Permissao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
