import {Application} from "express";
import {getAllPokemons} from "../controllers/pokemonController";

const routes = (app: Application): any => {


    app.route('/get-pokemons')
        .get(getAllPokemons);


}



export default routes;
