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
						<li><a href="">Início</a></li>
						<li><a href="">Sobre</a></li>
						<li><a href="">Conhecimento</a></li>
						<li><a href="">Experiência</a></li>
						<li><a href="">Contato</a></li>
					</ul>
				</div>
			</header>
		</>	
	)
}
