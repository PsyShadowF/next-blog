import { useRouter } from "next/router";

function PostItem(props) {
  const router = useRouter()

  function expandPage() {
    router.push('/posts/' + props.id)
  }

  return (
  <div className="post--general">
    <div className="post--box">
      <img className="post--image" src={props.image} onClick={expandPage}></img>
      <h1 className="post--title">{props.title}</h1>
      <p className="post--body">{props.body}</p>
    </div>
  </div>
  )
}

export default PostItem