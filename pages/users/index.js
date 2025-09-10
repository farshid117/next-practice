import Link from "next/link";
export default function User({children}) {
    return (
        <section>
            <h1>Usesrs List </h1>
            <Link href="/users/12/userdetails">لیست دوره ها</Link> 
        </section>
    );
}