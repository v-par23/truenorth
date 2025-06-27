import Navbar from "./Navbar";
import { motion } from "motion/react";

const News = () => {
    return (
        <div className="w-dvw h-dvh flex flex-col items-center bg-gradient-to-br from-red-900 via-black to-red-900">
            <Navbar />
            <div className="flex flex-1 flex-col justify-center items-center w-full py-10">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-yellow-400 text-6xl md:text-7xl font-black tracking-wider drop-shadow-lg mb-2">
                        📰
                    </span>
                    <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
                        News Portal Coming Soon!
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-gray-200 text-lg sm:text-xl md:text-2xl text-center max-w-xl mb-8"
                >
                    We’re preparing exciting updates, event recaps, and club announcements.<br />
                    <span className="text-red-400 font-semibold">Check back soon for the latest news!</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 10 }}
                    transition={{ delay: 1, duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="mt-8"
                >
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="6" width="18" height="12" rx="2" fill="#fff" fillOpacity="0.07"/>
                        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#fff" strokeWidth="2"/>
                        <rect x="6" y="9" width="6" height="2" rx="1" fill="#fff" fillOpacity="0.5"/>
                        <rect x="6" y="13" width="12" height="2" rx="1" fill="#fff" fillOpacity="0.2"/>
                    </svg>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-gray-400 text-sm mt-8"
                >
                    
                </motion.div>
            </div>
        </div>
    );
}

export default News;