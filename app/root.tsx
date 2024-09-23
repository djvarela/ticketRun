import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Container } from "./components";
import { AppProvider } from "./context/AppProvider";
import { LinksFunction } from "@remix-run/node";
import styles from './assets/css/style.css?url';
import { Prisma } from "./config";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];
export const action = async ({ request }) => {


  const form = await request.formData();
  const titulo = form.get('titulo');
  const body = form.get('contenido');
  const nombre = form.get('nombre');
  const apellido = form.get('apellido');

  await Prisma.ticket.create({
    data: {
      titulo: titulo,
      nombre: nombre,
      apellido: apellido,
      email: form.get('email'),
      urgencia : form.get('urgencia'),
      contenido: body
    }
  })

  return true
}



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

        <AppProvider>
          <Container>{children}</Container>
        </AppProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
