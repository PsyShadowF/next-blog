import data from "../../components/data.json"
import PostItemDetails from "../../components/Posts/PostItemDetails.js"

function PostDetails(props) {
  return (
    <PostItemDetails
      key= {props.data.id}
      image= {props.data.image}
      title= {props.data.title}
      body= {props.data.body}
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

  const selectedPost = data.find(x => x.id === parseInt(pageId))

  return {
    props: {
      data: selectedPost
    }
  }
}

export default PostDetails