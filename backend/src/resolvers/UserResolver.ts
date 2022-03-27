import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from 'crypto';

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ) {
        const user = { id: crypto.randomUUID(), name: name };

        this.data.push(user)

        return user;
    }

    @Mutation(() => User)
    async deleteUser(
        @Arg('id') id: string
    ) {
        let userD: (User|null) = null;

        this.data = this.data.filter((user) => {

            if(user.id == id)
            {
                userD = user;
            }

            return user.id != id;
        });

        return userD;
    }
}