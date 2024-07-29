import { Header } from './Components/Header'
import {Post} from './Components/Post'
import styles from './App.module.css'
import './global.css' //ja aplica a estilização
import { Sidebar } from './Components/Sidebar'
function App() {

  return (
   <div>
      <Header />
      <div className={styles.wrapper}>
         <Sidebar />
         <main>
         <Post
         author = "Gabriel Marques"
         content = "conteudo"
         />
         <Post
            author = "Giulia Araujo"
            content = "conteudo 2"
         />
         </main>
      </div>
   </div>
  )
}

export default App
