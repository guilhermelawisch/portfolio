import style from '../../styles/Experience.module.scss'

type IExperience = {
  company: string;
  title: string;
  periodMonth: number;
  start: Date;
  end: Date | string;
  time: any;
  obs: Array<string>;
}

const today = new Date()
const yesterday = new Date("April 4, 2021 00:00:00")

const diff = today.getTime() - yesterday.getTime()

const monthsDiff = new Date(diff).getMonth()

let years = 0
let months = monthsDiff

while (months >= 12) {
  years += 1
  months -= 12
}

export function ExperienceComponent() {
  const experiences:Array<IExperience> = [
    {
      company: 'MHNET Telecom',
      periodMonth: 17,
      title: 'Projetista de Redes',
      start: new Date("April 4, 2023 00:00:00"),
      end: 'Atual',
      time: 'abr de 2023 - o momento - ' + (years == 0 ? `${months} meses` : `${years} ano${years > 1 && 's'} e ${months} meses`),
      obs: [
        'Projeção de redes de Fibra Óptica',
        'Auxílio a técnicos em campo que possuam dúvidas sobre rede'
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
    },
    {
      company: 'LEFISC - Legislação Fiscal',
      periodMonth: 2,
      title: 'Estágio em desenvolvimento web',
      start: new Date("August 24, 2021 00:00:00"),
      end: new Date("October 20, 2021 00:00:00"),
      time: 'ago de 2021 - out de 2021 - 2 meses',
      obs: [
        'Estudo de Flutter para Aplicativo Mobile.',
        'Manutenção de ferramentas em VueJS e NodeJS.'
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
                { experience.obs.map((obs, indexObs) => <li key={indexObs}>{ obs }</li>) }
              </ul>
            </div>
          </div>
        })
      }
    </section>
  </>
}
