// ICON
import { PencilLine } from 'phosphor-react'

// CSS
import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1635073961939-f953954834ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/71861475?v=4"
        />

        <strong>Lucas Munhoz</strong>
        <span>Desenvolvedor Front-End</span>
      </div>

      <footer className={styles.footer}>
        <a href="#redirect">
          <PencilLine
            size={20}
          />

          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}