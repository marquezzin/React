import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/caefleury.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Caetano Korilo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time  title='11 de maio às 13:05' dateTime='2022-05-11'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera, acabei de terminar meu primeiro projeto em React!</p>
                <p> <a href="">caetano.design/doctorcare</a></p>
                <p> <a href="">#meuprimeiroprojeto</a> {'  '}
                    {/* espaçamento rápido */}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                 placeholder='Deixe um comentário'
                 />
            <footer>
                <button type="submit">Publicar</button>
            </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}
