import Link from "next/link";
export default function User({children}) {
    return (
        <section>
            <h1>Usesrs List </h1>
           <div className="flex justify-center items-center gap-7 ">
                <Link href="/users/12/userdetails" className=" text-red-500 btn btn-primary">لیست دوره ها</Link>
                <Link href="../courses/react-js/sessions/20" className="btn btn-primary">لیست اپیزود</Link> 
           </div>
        </section>
    );
}