import { json, MetaFunction, useLoaderData } from "@remix-run/react";
import { Prisma } from "../../config";



export const meta: MetaFunction = () => {
    return [
        { title: "Tickes | Tickets App" },
        { name: "description", content: "Welcome to Remix!" },

    ];
};


export const loader = async ()=>{

    return json(  await Prisma.ticket.findMany(
        {
            orderBy: [
                {
                    urgencia: "desc",
                }
            ]
        }
    ))


}



export default function tickets() {

 const ticket = useLoaderData()


    return (
        <section className="tickets">
            <h2>Tickets</h2>
        
            <section>

                <table className="table">

                    <thead>
                        <tr>
                            <th>TITULO</th>
                            <th>NOMBRE</th>
                            <th>EMAIL</th>
                            <th>URGENCIA</th>
                        </tr>
                    </thead>
                    <tbody>

                        {ticket.map(data => (

                            <tr key={data.id}>
                                <td>{data.titulo}</td>
                                <td>{data.nombre} {data.apellido}</td>
                                <td>{data.email}</td>
                                <td>{data.urgencia}</td>


                            </tr>
                        ))

                        }

                    </tbody>


                </table>


            </section>




        </section>
    );
}
