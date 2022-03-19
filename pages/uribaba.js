function userTwo(props) {
  return (
    <>
      {props.users.map((uzer) => {
        return (
          <div key={uzer.id}>
            <p>{uzer.name}</p>
            <p>{uzer.email}</p>
          </div>
        )
      })}
    </>
  )
}

export default userTwo

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data,
    },
  }
}
