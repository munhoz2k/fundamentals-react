// Components
import { Post } from "./Post"
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            name="Lucas Munhoz"
            age={21}
          />
        </main>
      </div>
    </div>
  )
}

export default App
