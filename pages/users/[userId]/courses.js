import {useRouter} from "next/router"

export default function Courses({children}) {

    const route = useRouter()
    console.log("route in neste route dynamic: ", route);

    return (
        <section>
            <h1>Courses for user with id : ({route.query.userId}) 😊 </h1>
        </section>
    );
}