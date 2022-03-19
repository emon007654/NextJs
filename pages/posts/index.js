function index(props) {
  return (
    <>
      {props.posts.map((data) => {
        return (
          <di key={data.id}>
            <h2>{data.id}</h2>
            <h3>{data.title}</h3>
          </di>
        )
      })}
    </>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
  }
}
