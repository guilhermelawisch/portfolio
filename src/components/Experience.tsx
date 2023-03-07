import style from '../../styles/Experience.module.scss'

type IExperience = {
  company: string;
  title: string;
  periodMonth: number;
  start: Date;
  end: Date;
  time: string;
  obs: Array<string>;
}

export function ExperienceComponent() {
  const experiences:Array<IExperience> = [
    {
      company: 'LEFISC - Legislação Fiscal',
      periodMonth: 2,
      title: 'Estágio em desenvolvimento web',
      start: new Date("August 24, 2021 00:00:00"),
      end: new Date("October 20, 2021 00:00:00"),
      time: 'ago de 2021 - out de 2021 - 2 mês',
      obs: [
        'Estudo de Flutter para Aplicativo Mobile.',
        'Manutenção de ferramentas em VueJS e NodeJS.'
      ]
    },
    {
      company: 'LEFISC - Legislação Fiscal',
      periodMonth: 17,
      title: 'Desenvolvedor Web e Mobile Jr',
      start: new Date("October 20, 2021 00:00:00"),
      end: new Date("February 28, 2023 00:00:00"),
      time: 'out de 2021 - fev de 2023 - 1 ano e 5 meses',
      obs: [
        'Desenvolvimento de Aplicativo Mobile para exibição de artigos e consultas em Flutter.',
        'Desenvolvimento de ferramentas de cálculo tributário como Simples Nacional e Regularização de Obras em VueJS e NodeJS.',
        'Criação e Manutenção de Procedures relacionadas à SQL Server.'
      ]
    }
  ]

  return <>
    <section className={style.sectionExperience} id="experience">
      <h2>Experiência</h2>
      {
        experiences.map((experience:IExperience, index) => {
          return <div key={index}>
            <div>
              <div/>
            </div>
            <div>
              <h3>{ experience.title }</h3>
              <p>{ experience.company }</p>
              <p>{ experience.time }</p>
              <ul>
                { experience.obs.map((obs) => <li>{ obs }</li>) }
              </ul>
            </div>
          </div>
        })
      }
    </section>
  </>
}
