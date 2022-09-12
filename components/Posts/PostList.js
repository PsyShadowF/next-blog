import PostItem from "./PostItem";

function PostList(props) {
  return (
    props.data.map(item => {
      return <PostItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        body={item.body}
      />
    })
  )
}

export default PostList