import styles from '../../styles/Header.module.scss'

export function HeaderComponent() {
	return (
		<>
			<header className={styles.header}>
				<div>
					<h2>Guilherme Lawisch Machado</h2>
				</div>
				<div>
					<ul>
						<li><a href="#home">Início</a></li>
						<li><a href="#about">Sobre</a></li>
						<li><a href="#experience">Experiência</a></li>
						<li><a href="#projects">Projetos</a></li>
						<li><a href="#contact">Contato</a></li>
					</ul>
				</div>
			</header>
		</>	
	)
}
