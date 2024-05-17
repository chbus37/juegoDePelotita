import { shortcuts,moveBall } from "./eventos.js";

const d = document;

d.addEventListener("keydown",e => {
    shortcuts(e);
    moveBall(e,".ball",".stage");
})