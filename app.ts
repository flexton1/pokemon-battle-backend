import express, {Response} from 'express';
import * as dotenv from 'dotenv';
import routes from "./routes/pokemonBattleRoutes";
import cors from 'cors';




const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;


//CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

app.disable('x-powered-by');


// serving static files
app.use(express.static('public'));

routes(app);


app.get("/", (req, res): Response=>

    res.send(`Node and express server running on port ${PORT}`)

);

app.listen(PORT, (): void =>
    console.log(`Your server is running on port ${PORT}`)
);
