import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import booksControllers from "./6-controllers/books-controllers"

import sunitize from "./3-middleware/sunitize";
const server = express();

// Limit CORS policy to our front end if data is not public to all world:
server.use(cors({origin:appConfig.frontEndUrl}));

server.use(express.json());
server.use(sunitize)

server.use("/api" ,booksControllers )
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));

