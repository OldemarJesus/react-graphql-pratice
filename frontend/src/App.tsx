import { gql, useQuery } from "@apollo/client"
import { NewUserForm } from "./components/NewUserForm";
import { UserItem } from "./components/UserItem";

export type User = {
  id: string;
  name: string;
}

export const GET_USER = gql`
query {
  users {
    id,
    name
  }
}
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  if (loading) {
    return <p>Carregando ...</p>
  }

  return (
    <div>
      <ul>
        {data?.users.map(user => <UserItem id={user.id} name={user.name} key={user.id}/>)}
      </ul>
      <NewUserForm />
    </div>
  )
}

export default App
