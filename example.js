import "./style.css";
// our config object - in a dynamic project you would fetch
// JSON from a server, and convert to an object...
import { alapConfig } from "./Config.js";

// our lib, locally...
// import Alap from "./node_modules/alap/src/index.js";
<<<<<<< HEAD
import Alap from "../../src/index.js";
=======
>>>>>>> 676b35a8d0a7ea817079dd3e1fcd0838706c6b8f

// ...or, if you are using npm, this would be:
//import Alap from "alap";

// pass the config object
const alap = new Alap(alapConfig);
