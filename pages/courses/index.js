import Link from "next/link";

export default function Courses() {
 
    const courses = [
        {id: 1 , title: "HTML" , shortName: "html" },
        {id: 2 , title: "Css" , shortName: "css" },
        {id: 3 , title: "Javascript" ,shortName : "js" },
    ]

    return (
        <section>
            <h1>Courses : </h1>
            <div className="flex justify-center items-center">
                <ul>
                    {
                        courses.map(course => (
                            <li key={course.id}>
                                <Link href={`/courses/${course.shortName}`}>{course.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}