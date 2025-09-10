import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<h1 className='font-sans font-bold text-center  text-amber-200'  style={{fontSize:"3ren"}}> Header Section</h1>
			<hr />
			<Component {...pageProps} />
			<hr />
			<h1 className=' font-sans font-bold text-center text-amber-200' style={{fontSize:"3ren"}}>Footer Section</h1>
		</>
	);
}
