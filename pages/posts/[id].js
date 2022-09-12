import data from "../../components/data.json"
import PostItemDetails from "../../components/Posts/PostItemDetails.js"

function PostDetails(props) {
  return (
    <PostItemDetails
      key= {props.posts.id}
      image= {props.posts.image}
      title= {props.posts.title}
      body= {props.posts.body}
    />
  )
}


export async function getStaticPaths() {
  return {
    fallback: false,
    paths: data.map(item => ({ params: { id: item.id.toString() }}))
  } 
}

export function getStaticProps(context) {

  const pageId = context.params.id;

  

  return {
    props: {
      posts: data.map(item => ({
        id: item.id,
        image: item.image,
        title: item.title,
        body: item.body
      }))
    }
  }
}

export default PostDetails