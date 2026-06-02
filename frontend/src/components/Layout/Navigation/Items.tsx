import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { useIsMobile } from "../../../hooks";

const Items = ({ setMenu }: { setMenu?: (open: boolean) => void }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { resolvedTheme } = useTheme();
	const { pathname } = useLocation();
	const isMobile = useIsMobile();

	const handleNavigation = (path: string) => {
		if (path.startsWith("#")) {
			const sectionId = path.replace("#", "");
			navigate("/", { state: { scrollTo: sectionId } });
		} else if (path === "/" && pathname === "/") {
			const sectionId = "hero";
			const element = document.getElementById(sectionId);
			element?.scrollIntoView({ behavior: "smooth" });
		} else {
			navigate(path);
		}
	};

	return (
		<ul
			className={`flex ${isMobile && "flex-col"} nav items-center gap-5 h-full`}
		>
			{/* TODO: Split into nav item component */}
			<li className="relative h-full">
				<motion.a
					href="/"
					onClick={(event) => {
						event.preventDefault();
						handleNavigation("/");
						setMenu?.(false);
					}}
					whileHover={{ color: "var(--accent-color-1)" }}
					className={`flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`}
					key={`${resolvedTheme} Home`}
				>
					{t("nav.home")}
				</motion.a>
			</li>
			<li className="relative h-full">
				<motion.button
					onClick={(event) => {
						event.preventDefault();
						handleNavigation("#about");
						setMenu?.(false);
					}}
					whileHover={{ color: "var(--accent-color-1)" }}
					className={`flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`}
					key={`${resolvedTheme} About`}
				>
					{t("nav.about")}
				</motion.button>
			</li>
			<li className="relative h-full">
				<motion.button
					onClick={(event) => {
						event.preventDefault();
						handleNavigation("#skills");
						setMenu?.(false);
					}}
					whileHover={{ color: "var(--accent-color-1)" }}
					className={`flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`}
					key={`${resolvedTheme} Skills`}
				>
					{t("nav.skills")}
				</motion.button>
			</li>
			<li className="relative h-full">
				<motion.button
					onClick={(event) => {
						event.preventDefault();
						handleNavigation("#projects");
						setMenu?.(false);
					}}
					whileHover={{ color: "var(--accent-color-1)" }}
					className={`flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`}
					key={`${resolvedTheme} Projects`}
				>
					{t("nav.projects")}
				</motion.button>
			</li>
			<li className="relative h-full">
				<motion.a
					href="contact"
					onClick={(event) => {
						event.preventDefault();
						handleNavigation("contact");
						setMenu?.(false);
					}}
					whileHover={{ color: "var(--accent-color-1)" }}
					className={`flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`}
					key={`${resolvedTheme} Contact`}
				>
					{t("nav.contact")}
				</motion.a>
			</li>
		</ul>
	);
};

export default Items;
