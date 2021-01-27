import dev from "./dev";
import prod from "./prod";

const config = window.location.hostname === "paybillsabpaisa.in" ? prod : dev;

export default config;
