function PostItemDetails(props) {
  return (
    <div className="master">
      <div className="slave">
        <img src={props.image}  className="image"/>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default PostItemDetails