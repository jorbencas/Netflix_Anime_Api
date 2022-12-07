import { propsEmail } from "../../types/StatusCode";

export default function normal (props:propsEmail = 'amigo'){ 
  return `<div> 
  <p>Hola ${props}</p> 
  <p>Esto es una prueba del vídeo</p> 
  <p>¿Cómo enviar correos eletrónicos con Nodemailer en NodeJS </p> 
</div> `};