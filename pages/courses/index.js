import Link from "next/link";

export default function Courses({children}) {
 
    const courses = [
        {id: 1 , title: "HTML" , ["course-short-name"]: "html" },
        {id: 2 , title: "Css" , ["course-short-name"]: "css" },
        {id: 3 , title: "Javascript" , ["course-short-name"]: "js" },
    ]

    return (
        <section>
            <h1>Courses : </h1>
            <div className="flex justify-center items-center">
                <ul>
                    {
                        courses.map(course => (
                            <li key={course.id}>
                                <Link href={`/courses/${course["course-short-name"]}`}>{course.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}