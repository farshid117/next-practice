import {useRouter} from "next/router"

export default function CourseDetails({children}) {

    const route = useRouter()
    console.log("route in courses: ", route.query);
    return (
        <section>
            <h1>CourseDetails</h1>
        </section>
    );
}