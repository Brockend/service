import Link from "next/link";
import "./globals.scss";
import "./main-page.scss";

export default function Home() {
	return (
		<main className="main">
			<Link href={'/todos'}>Todo</Link>
		</main>
	);
}
