import Navbar from './Navbar';
import { motion } from "motion/react";

const Members = () => {
    return (
        <motion.div 
            className="w-dvw h-dvh flex flex-col items-center bg-gradient-to-br via-black from-red-900 to-red-900"
         
            >
            <Navbar />
            <div className="flex flex-1 flex-col justify-center items-center w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
                >
                    Coming Soon...
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-gray-300 text-lg sm:text-xl md:text-2xl text-center max-w-xl"
                >
                    The Members Area is under construction.<br />
                    Stay tuned for exclusive content and updates!
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="mt-10"
                >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/>
                        <motion.circle
                            cx="12" cy="12" r="10"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeDasharray="62.8"
                            strokeDashoffset="62.8"
                            animate={{ strokeDashoffset: 0 }}
                            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Members;