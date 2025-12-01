import { procesarPedido } from "./pedido.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync();


    const pedido=  {
        cliente: "miguel",
        producto: "sopa",
        cantidad: 3,
    }
const extra1 = prompt("ingrese extra 1: ");
const extra2 = prompt("ingrese extra 2: ");
const extra3 = prompt("ingrese extra 3: ");

const {cliente, extras} = procesarPedido(pedido, extra1,extra2,extra3)

console.log(cliente);
