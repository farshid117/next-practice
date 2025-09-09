import { useRouter } from "next/router"
export default function UserDetails({children}) {
 
    const router = useRouter()
    console.log("route in user: ", router);

    return (
        <section>
            <h1>UsersDetails</h1>
        </section>
    );
}