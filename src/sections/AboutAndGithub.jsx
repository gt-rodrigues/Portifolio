import { useEffect, useState } from "react";
import { ArrowUpRight, FolderGit2, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function AboutAndGithub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os repositórios mais recentes direto da API oficial do GitHub
    fetch(
      `https://api.github.com/users/${portfolioData.githubUsername}/repos?sort=updated&per_page=6`
    )
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#080808] text-[#F2EFE9]">
      {/* Seção Sobre Mim */}
      <section
        id="sobre"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 md:px-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] tracking-[0.22em] text-[#8E8A82]">
              02 / APRESENTAÇÃO
            </span>
            <h3 className="mt-3 font-serif text-3xl uppercase tracking-wide text-[#F2EFE9] sm:text-4xl">
              {portfolioData.about.title}
            </h3>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-[#B8B3A8] sm:text-base lg:col-span-8">
            {portfolioData.about.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos via API do GitHub */}
      <section
        id="projetos"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 md:px-12"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-[11px] tracking-[0.22em] text-[#8E8A82]">
              03 / REPOSITÓRIOS RECENTES
            </span>
            <h3 className="mt-3 font-serif text-3xl uppercase tracking-wide text-[#F2EFE9] sm:text-4xl">
              Projetos no GitHub
            </h3>
          </div>

          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#F2EFE9]/40 pb-1 text-xs tracking-[0.18em] text-[#F2EFE9] transition-colors hover:border-[#F2EFE9]"
          >
            PERFIL COMPLETO
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {loading ? (
          <p className="text-sm text-[#8E8A82]">Carregando repositórios da API...</p>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-sm border border-white/10 bg-[#0D0D0D] p-6 transition-all hover:border-[#E5DFD5]/50 hover:bg-[#121212]"
              >
                <div>
                  <div className="flex items-center justify-between text-[#8E8A82]">
                    <FolderGit2 className="h-5 w-5" />
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F2EFE9]" />
                  </div>

                  <h4 className="mt-5 font-serif text-xl tracking-wide text-[#F2EFE9]">
                    {repo.name}
                  </h4>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#A39E93]">
                    {repo.description || "Projeto desenvolvido e versionado no GitHub."}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-[#8E8A82]">
                  <span>{repo.language || "Código"}</span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3" /> {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#A39E93]">
            Configure seu <code className="text-[#F2EFE9]">githubUsername</code> em{" "}
            <code className="text-[#F2EFE9]">src/data/portfolioData.js</code> para listar
            seus projetos automaticamente aqui.
          </p>
        )}
      </section>
    </div>
  );
}