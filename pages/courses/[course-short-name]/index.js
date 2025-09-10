import Link from "next/link";
import { useRouter } from "next/router";

export default function CourseShortName() {

    const route = useRouter()
    console.log("route in shortNAme index: ", route);
    const shortName = route.query["course-short-name"]
    

    let courseArr = []

    switch (shortName){

        case "html" :
          courseArr = [
                { id: 1, desc: "", title: "درس اول" },
                { id: 2, desc: "", title: "درس دوم" },
                { id: 3, desc: "", title: "درس سوم" },
                { id: 4, desc: "", title: "درس چهارم" },
            ]
            break;

        case "css" :
         courseArr = [
                { id: 1, desc: "", title: "درس اول" },
                { id: 2, desc: "", title: "درس دوم" },
                { id: 3, desc: "", title: "درس سوم " },
                { id: 4, desc: "", title: "درس چهارم" },
                { id: 5, desc: "", title: "درس پنجم" },
                { id: 6, desc: "", title: "درس ششم" },
            ]
            break;
        
        case "js" :
            courseArr = [
                { id: 1, desc: "", title: "درس اول" },
                { id: 2, desc: "", title: "درس دوم" },
                { id: 3, desc: "", title: "درس سوم" },
            ]
            break;
    }


    console.log("courseArr: ", courseArr);


    return (
        <section>
            <h1>Course of  : {route.query["course-short-name"]} </h1>
            <ul className=" text-right font-bold">
                {
                    courseArr.map(session => (
                        <li key={session.id}>
                            <Link href={`/courses/${shortName}/sessions/${session.id}`} >{session.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}