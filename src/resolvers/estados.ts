import axios from "axios";
import { Field, ObjectType, Query, Resolver } from "type-graphql";



@ObjectType()
class EstadoType {
    @Field(() => String)
    nome!: string;

    @Field(() => String)
    sigla!: string;
}

@ObjectType()
class PopulationType {
    @Field(() => Number)
    population!: number;

    @Field(() => String)
    name!: string;
}


@Resolver()
export class EstadoResolver {

    @Query(() => [EstadoType])
    async estados(): Promise<EstadoType> {
        return await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
            .then(res => res.data);
    }

    @Query(() => [PopulationType])
    async getPopulation(): Promise<PopulationType> {
        return await axios.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
            .then(res => res.data.geonames);
    }



}