// routes/tickets.tsx
import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";

const prisma = new PrismaClient();

export const loader = async () => {
    try {
        const tickets = await prisma.ticket.findMany({
            orderBy: [
                {
                    urgencia: "desc",
                }
            ]
        });
        return json(tickets); // Devuelve los datos en formato JSON para el cliente
    } catch (error) {
        throw new Response("Error al obtener tickets", { status: 500 });
    }
};


import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export const useTickets = () => {
    
    const tickets = useLoaderData(); // Obtiene los tickets desde el loader de la ruta

    return {
        tickets
    };
};
