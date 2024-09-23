import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "stream/consumers";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard | Tickets App" },
    { name: "description", content: "Welcome to Remix!" },

  ];
};



export default function Index() {
  return (
    <section>
        <h2>Dasboard</h2>

    </section>
  );
}
