import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Language = () => {
	const { i18n } = useTranslation();
	const { theme } = useTheme();

	return i18n.languages.map((lng) => {
		const shortLng = lng.split("-")[0];
		if (shortLng !== i18n.resolvedLanguage) {
			return (
				<motion.button
					whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color-1)" }}
					className="px-3 py-2 sm:px-4 sm:py-3 bg-bg-theme-2 text-lg rounded-[50%] border-2 border-accent-theme-1 font-semibold cursor-pointer"
					onClick={() => i18n.changeLanguage(lng)}
					key={`${lng} ${theme}`}
					aria-label="Language Switcher"
				>
					{lng.toUpperCase()}
				</motion.button>
			);
		} else {
			return null;
		}
	});
};

export default Language;
