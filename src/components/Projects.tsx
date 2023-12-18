import style from '../../styles/Projects.module.scss'

export function ProjectsComponent() {
  return <>
    <section className={style.sectionProjects} id="projects">
      <h2>Projetos</h2>
      <div>
        <div>
          <h3>Aplicativo para Android e iOS</h3>
          <p>Comecei o estágio estudando desenvolvimento Mobile através dos cursos da Alura, com isso, desenvolvi um app do zero, para exibição de conteúdo em formato de texto e vídeo, além disso, esse aplicativo possuí um sistema de solicitações. Aprimorei muito minha habilidade de resolver problemas, pois era o único da equipe que conhecia a tecnologia.</p>
        </div>
        <div>
          <h3>Ferramentas de Cálculo Tributário</h3>
          <p>Desenvolvi alguns simuladores como do Simples Nacional e Regularização de Obras, onde aprendi muito sobre o quão importante é o planejamento de projetos, principalmente em projetos complexos como estes.</p>
        </div>
      </div>
    </section>
  </>
}