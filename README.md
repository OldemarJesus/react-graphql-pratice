# Notas Free

Esta aplicação serve simples propósito de guardar notas
de forma simples e prática

## Exemplo de operações
> Listar registos

```gql
query {
  users {
    id,
    name
  }
}
```

> Adicionar novos registos
```gql
mutation($name: String!) {
  createUser(name: $name) {
    id
    name
  }
}
```

> Apagar registos
```gql
mutation($id: String!){
  deleteUser(id: $id) {
    id,
    name
  }
}
```