function users({ users }) {
  return (
    <>
      {users.map((uzer) => {
        return (
          <div key={uzer.id}>
            <p>{uzer.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default users

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await response.json()

  return {
    props: {
      users: data,
    },
  }
}
