import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mini-Project1-React/', // 👈 importante: debe tener slash inicial y final
})
const nombre = "Mariana";
const edad = 26;
const ciudad = "Bogotá";
const carrera = "Diseño Gráfico";

const mensaje = `
Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.
Estás inscrita en la carrera de ${carrera}.
${edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad."}
Bienvenida a la plataforma.
`;

console.log(mensaje);
