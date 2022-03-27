import { gql, useMutation } from "@apollo/client";
import { GET_USER, User } from "../App";
import { client } from "../lib/apollo";

const DELETE_USER = gql`
mutation($id: String!){
  deleteUser(id: $id) {
    id,
    name
  }
}
`

export function UserItem(user: User) {
    const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER);

    async function handleDeleteUser(id: String) {
        await deleteUser({
            variables: {
                id,
            },
            update: (cache, { data: { deleteUser } }) => {
                let { users } = client.readQuery({ query: GET_USER })

                users = users.filter((user: User) => {
                    return user.id != deleteUser.id
                })

                cache.writeQuery({
                    query: GET_USER,
                    data: {
                        users: users
                    }
                })
            }
        })
    }

    return (
        <li key={user.id}>{user.name} <button onClick={() => handleDeleteUser(user.id)}>x</button></li>
    )

}