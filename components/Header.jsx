import Link from "next/link";

const Header = () => {
	return (
		<div className="w-full flex items-center gap-10 p-10">
			<Link href="/">Inicio</Link>
			<Link href="/about">Nosotros</Link>
			<Link href="/contact">Contacto</Link>
		</div>
	);
};

export default Header;
