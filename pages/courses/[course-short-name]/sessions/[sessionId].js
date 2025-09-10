import { useRouter } from "next/router"

export default function CourseDetails({ children }) {

    const route = useRouter()
    console.log("route in courses: ", route.query);

    const goBackHandler = () => {
        route.back()
    }

    return (
        <section>
            <h1>Course Details: </h1>
            <ul>
                <h2 className=" text-red-200">course Name : ({route.query["course-short-name"]})</h2>
                <h2 className=" text-red-500">session Number: {route.query.sessionId}</h2>
            </ul>
            <hr />

            <button onClick={goBackHandler}>Back</button>
        </section>
    );
}