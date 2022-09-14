import * as fs from "fs";


export const getAllPokemons = async (req, res) => {
    try{

        fs.readFile('pokemons.json', (err, data: any) => {
            if (err) throw err;

            let response: any = {};
            response.data = JSON.parse(data);
            response.totalRecords = 6;
            res.status(200).json(response);

        });




    }
    catch (error: any){

        throw new Error("Cannot get pokemons");
    }
}
