import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/munhoz2k.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Munhoz</strong>
            <span>Web Developer (Frontend)</span>
          </div>
        </div>
        
        <time title='23 de Agosto às 22:32' dateTime='2023-08-23 22:32:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Corrupti saepe temporibus sapiente possimus perspiciatis itaque maxime repudiandae molestias delectus pariatur.</p>
        <p> <a href="">consectetur</a>, quibusdam voluptatum odio vitae.</p>
        <p>Illum laudantium quia hic repudiandae?</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}