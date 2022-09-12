import data from "../../components/data.json";
import PostList from "../../components/Posts/PostList"

function Posts(props) {
  return(
    <PostList data={props.data}/>
  )
}

export async function getStaticProps() {
  return{
   props: {
      data: data
    },
    revalidate: 3600
  }
}

export default Posts