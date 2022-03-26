- Quais problemas GraphQL resolve?
    - Overfetching
        - http://localhost:300/users
            - DB (usuários, endereços)
    - Underfetching
        - http://localhost:3000/users
            - DB (usuário)

// http://localhost:3000/graphql

```gql
query {
    users {
        id
        name
        githut

        addresses {
            city
            state
            country
        }
    }
}
```