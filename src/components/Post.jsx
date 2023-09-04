import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'
import { useState } from 'react';

export function Post ({ id, author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [userInput, setUserInput] = useState('')

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedTimeRelativeToNow = formatDistanceToNow(
    publishedAt,
    { 
      locale: ptBR,
      addSuffix: true
    },
    
  )

  function handleCreateNewComent () {
    event.preventDefault()

    setComments([...comments, userInput])
    setUserInput('')
  }

  function handleUserInputChange () {
    event.target.setCustomValidity('')
    setUserInput(event.target.value)
  }

  function handleNewInvalidComment () {
    event.target.setCustomValidity('Esse campo deve ser preenchido')
  }

  function deleteComment (comment) {
    const newCommentList = comments.filter(i => i != comment)
    setComments(newCommentList)
  }

  const isUserInputEmpty = userInput.length == 0
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedTimeRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        { content.map(line => {
          if (line.type == 'link') {
            return <p key={line.content}> <a href='#'> {line.content} </a> </p>
          } 
          else if (line.type == 'paragraph') {
            return <p key={line.content}> {line.content} </p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={userInput}
          onChange={handleUserInputChange}
          required
          onInvalid={handleNewInvalidComment}
        />

        <footer>
          <button type='submit' disabled={isUserInputEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
           <Comment 
              key={comment}
              deleteCommentFunction={deleteComment}
              content={comment}
            />
          )
        })}
      </div>
    </article>
  );
}