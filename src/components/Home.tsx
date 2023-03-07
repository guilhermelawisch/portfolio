import styles from '../../styles/Home.module.scss'

export function HomeComponent() {
  return <>
    <section className={styles.sectionHome} id="home">
      <div>
        <h3>Em busca de uma<br/>nova oportunidade</h3>
        <p>Após mais de um ano de atuação na área, tenho convicção que estou pronto para contribuir muito mais para construção e aprimoramento de um produto que ajude a facilitar o cotidiano de outras pessoas.</p>
        <button>Baixar Currículo</button>
      </div>
      <div>
        <div>
          <div/>
          <img src="https://github.com/guilhermelawisch.png" alt="" />
        </div>
      </div>
    </section>
  </>
}

