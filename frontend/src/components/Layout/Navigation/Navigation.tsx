import { useState } from "react";
import { useIsMobile, useLockBodyScroll } from "../../../hooks";
import Items from "./Items.tsx";
import Language from "./Language.tsx";
import Logo from "./Logo.tsx";
import Menu from "./Menu.tsx";
import Theme from "./Theme.tsx";
import "../../../styles/Navigation.css";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const isMobile = useIsMobile();

	useLockBodyScroll(isMenuOpen && isMobile);

	return (
		<nav
			id="nav"
			className={`fixed flex flex-col justify-center items-center ${isMenuOpen && isMobile && "h-screen"} ${!isMobile && "border-b-1 border-accent-theme-1"} w-full bg-bg-theme-1 z-2000 overflow-hidden`}
		>
			<div
				className={`flex justify-between pl-0.5 pr-2 py-4 max-w-[1200px] w-full ${isMobile && "border-b-1 border-accent-theme-1"}`}
			>
				<div className="flex items-center gap-4 md:gap-8">
					<Logo />
					{!isMobile && <Items />}
				</div>
				<div className="flex justify-between items-center gap-3 sm:gap-4">
					<Language />
					<Theme />
					{isMobile && <Menu isMenu={isMenuOpen} setMenu={setIsMenuOpen} />}
				</div>
			</div>
			{isMenuOpen && isMobile && (
				<div
					className={`flex justify-center items-center h-full w-full bg-bg-content`}
				>
					<Items setMenu={setIsMenuOpen} />
				</div>
			)}
		</nav>
	);
};

export default Navigation;
