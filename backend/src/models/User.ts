import { __Type } from "graphql";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(__Type => ID)
    id?: string

    @Field()
    name?: string
}