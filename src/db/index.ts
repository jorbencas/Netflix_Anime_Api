// import { connectMongo } from "./mongo";
import { connectPostgress } from "./postgres";

(() => {
    //connectMongo();
    connectPostgress();
})();