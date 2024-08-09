import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";


export function Post({ author, publishedAt , content}) {
//funcionalidade dos comentarios funcionando para todo post
const [comments,setComments] = useState([ //valor inicial
  1,
  2
])

  //uso da 'date-fns'
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    //prefixo
    addSuffix: true,
  });

  

  function handleCreateNewComment() {
    event.preventDefault() //nao ter redirecionamento
    
    setComments([...comments,comments.length +1]) //passa o novo valor, não apenas oq quer inserir
    
  }

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
            if (line.type == "paragraph"){
                return <p>{line.content}</p>
            } else if (line.content){
                return <p><a href="">{line.content}</a></p>
            }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} //incrementa a lista comments
       className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{ //expõe os comentarios de acordo com os elementos da lista
          return <Comment/>
        })}
      </div>
    </article>
  );
}
