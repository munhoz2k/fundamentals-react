// Components
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/munhoz2k.png',
      name: 'Lucas Munhoz',
      role: 'Desenvolvedor Web'
    },
    content: [
      {type: 'paragraph',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      {type: 'paragraph' ,content: 'Corrupti saepe temporibus sapiente possimus perspiciatis itaque maxime repudiandae molestias delectus pariatur.'},
      {type: 'link', content: 'consectetur'},
      {type: 'paragraph', content: 'Illum laudantium quia hic repudiandae?'}
    ],
    publishedAt: new Date('2023-08-22 22:55:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Desenvolvedor Web'
    },
    content: [
      {type: 'paragraph', content: 'Fala Lucao, tudo bem?'},
      {type: 'paragraph', content: 'Entao, nao entendi porra nehuma do que voce digitou no seu comentario cara!'},
      {type: 'paragraph', content: 'Mesmo assim agradeco demais pelo feedback seu gostoso <3'},
      {type: 'link', content: 'Clique'}
    ],
    publishedAt: new Date('2023-08-28 16:13:30'),
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                id={ post.id }
                author={ post.author }
                content={ post.content }
                publishedAt={ post.publishedAt }
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
