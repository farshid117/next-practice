import { useRouter } from "next/router";

export default function CourseShortName({children}) {
 
    const route = useRouter()

    return (
        <section>
            <h1>Course of  : {route.query["course-short-name"]} </h1>
        </section>
    );
}