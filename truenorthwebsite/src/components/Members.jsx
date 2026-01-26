import { useState } from "react";
import Navbar from './Navbar';
import { motion } from "motion/react";

const Members = () => {
    const [activeMember, setActiveMember] = useState(null);
    const [imageErrors, setImageErrors] = useState({});

    const members = [
        {
            name: "Jeremy Hazin",
            headline: "Tokyo 2020 and Paris 2024 Olympian",
            photo: "/members/jeremy-hazin.jpg",
            achievements: [
                "Tokyo 2020 and Paris 2024 Olympian",
                "Current New York University student",
                "2022 Commonwealth Games – Placed 9th in Men’s Singles",
                "2021 World Championships Top 64 in Men’s Singles",
                "2019 Pan American Games Placed 9th in Men’s Singles",
                "2019 Pan American Championships – Bronze Medal in Men’s Teams",
                "2022 Canadian National Mixed Doubles Champion",
                "2017 & 2018 Canadian National Men’s Singles Champion",
                "2015, 2016, 2017, 2018 & 2019 Canadian National Men’s Doubles Champion",
                "2015 Puerto Rico Junior and Cadet Open – Cadet Boys’ Singles Champion",
            ],
        },
        {
            name: "Joyce Xu",
            headline: "Member of Team Canada at World Championships",
            photo: "/members/joyce-xu.jpg",
            achievements: [
                "Current medical student at McMaster University",
                "Member of Team Canada at 2018, 2019, 2021 World Championships",
                "2019 Pan Am Championships Women’s Doubles Silver Medal",
                "2018, 2019 Pan Am Jr. Championships U18 Girls Teams Silver Medal",
                "2019 Canada Cup Finals Women’s Single Silver, Teams Gold",
                "2018 Canadian Junior and Cadet Open U18 Teams Bronze Medal",
                "2017 World Cadet Challenge U15 Teams Silver Medal",
                "2017 Polish Junior and Cadet Open U15 Doubles Bronze Medal",
                "Canadian Championships: Women’s Single Bronze, Doubles Bronze, Mixed Doubles Bronze, U21 Singles Bronze",
                "Canadian Jr. Championship: U18 Singles Champion, Doubles Champion, Mixed Doubles Champion, Teams Champion",
                "Ontario Summer Games U18 Singles Champion, Teams Champion",
                "Ontario Championships Women's Single and U18 Singles Champion",
            ],
        },
        {
            name: "Terence Yeung",
            headline: "Member of Team Canada at World Championships",
            photo: "/members/terence-yeung.jpg",
            achievements: [
                "Current medical student at Western University",
                "Member of Team Canada at 2019 World Championships",
                "2021 U19 Mixed Doubles World Ranking 6th",
                "2021 World Youth Championships U19 Mixed Doubles Quarterfinalist",
                "2021 Pan Am Youth Championships U19 Singles Finalist",
                "2019 Pan Am Championships Men’s Team Bronze Medal",
                "2019 Pan Am Jr. Championships Teams Silver Medal",
                "2019 ITTF El Salvador Junior Circuit Jr. Teams Gold, Doubles Bronze",
                "2018 ITTF Croatia Junior Circuit Jr. Teams Silver",
                "2018 ITTF Serbia Junior Circuit Jr. Teams Silver",
                "Canadian Championships: Men’s Singles Bronze, Doubles Bronze, Mixed Doubles Bronze, Teams Champion, U21 Singles Champion",
                "Canadian Jr. Championships: U18 Singles Bronze, Doubles Bronze, Mixed Doubles Silver, Teams Champion",
            ],
        },
        {
            name: "Max Ji",
            headline: "Canadian Men’s National Team Member",
            photo: "/members/max-ji.jpg",
            achievements: [
                "Canadian Men’s National Team Member",
                "Current student at University of Toronto",
                "2023 Joola North American Team Championships Champion",
                "2022 Badger Open U18 Singles Champion",
                "2022 Canadian Championships Men’s Singles Bronze Medal",
                "2022 Ontario Summer Games Singles Silver Medal",
                "2021 Canadian Jr. Championships U19 Boys Singles Bronze Medal",
                "2021 Pan Am Junior and Cadet Selection U19 Champion",
            ],
        },
        {
            name: "Jordan Grewal",
            headline: "Canadian U19 National Team Member",
            photo: "/members/jordan-grewal.jpg",
            achievements: [
                "Canadian U19 National Team Member",
                "Member of Team Canada at 2024 World Team Championships",
                "2023 Ontario Championships Men’s Singles Champion",
                "2023 Ontario Summer Cup U19 Boys Singles Champion, Class A Champion",
                "2023 Canadian Jr. Championships U19 Boys Team Gold Medal",
                "2023 Canada Winter Games Doubles Silver Medal, Teams Silver Medal",
                "2022 Ontario Summer Games Singles Bronze Medal",
                "2022 Ontario Championships Open Men’s Singles Champion, U19 Boys Singles Silver Medal",
            ],
        },
        {
            name: "Gina Fu",
            headline: "Canadian Women’s National Team Member",
            photo: "/members/gina-fu.jpg",
            achievements: [
                "Canadian Women’s National Team Member",
                "Current Cornell University student",
                "Member of Team Canada at 2022 Commonwealth Games",
                "2023 Pan Am Jr. Championships U19 Girls Doubles Bronze Medal, Girls Teams Silver Medal",
                "2022 Canadian Championships Women’s Doubles Champion, Mixed Doubles Champion",
                "2022 Canadian Jr. Championships U19 Girls Singles Champion, Girls Teams Champion",
                "2021 Pan Am Championships Women’s Team Silver Medal",
                "2021 Pan Am Jr. Championships U15 Girls Doubles Silver Medal, Girls Teams Silver Medal",
                "2021 Canadian Championships Women’s Singles Bronze Medal",
                "2021 US Open U15 Girls Team Bronze Medal",
            ],
        },
        {
            name: "James Yu",
            headline: "Canadian U19 National Team Member",
            photo: "/members/james-yu.jpg",
            achievements: [
                "Canadian U19 National Team Member",
                "Current student at University of Waterloo",
                "2022 Canadian Jr. Championships U19 Boys Teams Silver Medal",
                "2022 Ontario Summer Games Singles Bronze Medal",
                "2022 Ontario Winter Cup Open Singles Champion",
                "2022 Ontario BATTS Regional Cup Open Singles Champion",
                "2021 Joola North American Teams Championships Champion",
                "2021 Ontario Challenge Open Singles Silver Medal",
            ],
        },
        {
            name: "Kevin Guo",
            headline: "Canadian Men’s National Team Member",
            photo: "/members/kevin-guo.jpg",
            achievements: [
                "Canadian Men’s National Team Member",
                "Current Yale University student",
                "Team Ontario Flag Bearer at Canada Winter Games",
                "2023 Canadian Jr. Championship U19 Singles Silver Medal, Teams Gold Medal",
                "2023 Canada Winter Games Singles Bronze Medal, Doubles Silver Medal, Mixed Doubles Silver Medal, Teams Silver Medal",
                "2022 Canadian Championships Men’s Doubles Bronze Medal",
                "2022 Ontario Summer Games Singles Champion",
                "2021 US Open U15 Boys Doubles Silver Medal",
                "2021 Joola North American Teams Championships Champion",
                "2021 Canadian Jr. Championships U15 Singles Silver Medal",
            ],
        },
        {
            name: "Justin You",
            headline: "Canadian U19 National Team Member",
            photo: "/members/justin-you.jpg",
            achievements: [
                "Canadian U19 National Team Member",
                "Current student at University of Waterloo",
                "2024 Canadian Jr. Championships U19 Teams Bronze Medal",
                "2024 Ontario Summer Games U19 Doubles Silver Medal",
                "2024 Ontario Championships U19 Singles Bronze Medal",
                "2024 Markham Championships U19 Singles Silver Medal",
                "2023 Canadian Jr. Championships U19 Teams Gold Medalist, Singles Quarterfinalist",
                "2023 Canada Winter Games Team Ontario Alternate",
                "2021 Canadian Jr. Championships U15 Singles Quarterfinalist",
            ],
        },
        {
            name: "Zachary Li",
            headline: "Canadian U15 National Team Member",
            photo: "/members/zachary-li.jpg",
            achievements: [
                "Canadian U15 National Team Member",
                "Current student at University of Washington",
                "2024 Canadian Jr. Championships U19 Boys Teams Bronze Medal",
                "2024 Ontario Summer Games U19 Boys Singles Bronze Medal",
                "2024 Ontario Championships U19 Boys Doubles Silver Medal",
                "2023 Ontario Championships U19 Boys Doubles Bronze Medal",
                "2022 Canadian Jr. Championships U15 Boys Teams Silver Medal",
                "2022 Ontario Summer Games U15 Boys Singles Bronze Medal, U15 Mixed Doubles Bronze Medal",
                "2022 Ontario Championships U15 Boys Singles Bronze Medal",
                "2022 Ontario Winter Cup U15 Singles Champion",
                "2022 Ontario Fall Cup U19 Singles Champion",
            ],
        },
        {
            name: "Vedant Parikh",
            headline: "Canadian U15 National Team Member",
            photo: "/members/vedant-parikh.jpg",
            achievements: [
                "Canadian U15 National Team Member",
                "Current student at University of Waterloo",
                "2024 Ontario Summer Games U19 Boys Doubles Silver Medal",
                "2022 Canadian Jr. Championships U15 Teams Silver Medal",
                "2022 Ontario Championships U15 Boys Singles Silver Medal",
                "2022 Ontario Fall Cup Open Singles Silver Medal",
                "2022 Ontario BATT Regional Cup U15 Boys Singles Champion",
                "2022 Ontario Winter Cup U15 Boys Single Silver Medal",
            ],
        },
        {
            name: "Aiden Zhao",
            headline: "2024 Ontario Summer Games U19 Bronze Medal",
            photo: "/members/aiden-zhao.jpg",
            achievements: [
                "2024 Ontario Summer Games U19 Boys Doubles Bronze Medal",
                "2024 Ontario Summer Games U19 Boys Singles Quarterfinalist",
                "2024 Quebec Big-Bang Ping-Pong Depot Division D Bronze Medal",
                "2023 US Open U15 Mixed Doubles Quarterfinalist",
                "2023 Ontario CCTTA Top 8 U15 Singles Silver Medal",
                "2022 Quebec Circuit Division D Singles Silver Medal, Teams Division E Champion",
                "2022 Ontario CCTTA Top 8 U15 Singles Silver Medal",
                "2022 Ontario Team Championships Division B Bronze Medal",
                "2022 Ontario Regional Cup U19 and U15 Singles Bronze Medal",
                "2022 Ontario Winter Cup U15 Singles Quarterfinalist",
                "2021 Ontario Championships U13 Boys Singles Quarterfinalist",
            ],
        },
        {
            name: "Stephanie Bai",
            headline: "Canadian U15 National Team Member",
            photo: "/members/stephanie-bai.jpg",
            achievements: [
                "Canadian U15 National Team Member",
                "2024 WTT Youth Westchester U15 Mixed Doubles Semifinalist",
                "2024 Canadian Jr. Championships U19 Girls Teams Champion",
                "2024 Ontario Summer Games U15 Mixed Doubles Bronze Medal",
                "2024 Ontario Summer Games U15 Girls Doubles Silver Medal",
                "2024 Ontario Championships U15 Girls Singles Semifinalist",
                "2024 Ontario Championships U15 Girls Doubles Bronze Medal",
                "2024 Ontario Championships U15 Mixed Doubles Bronze Medal",
                "2024 Mississauga Championships U17 Singles Bronze Medal",
                "2023 Canadian Jr. Championships U15 Girls Teams Silver Medal",
                "2023 Ontario Championships U15 Mixed Doubles Silver Medal",
                "2023 Ontario Championships U15 Girls Doubles Silver Medal",
            ],
        },
        {
            name: "Valerie Poon",
            headline: "2024 Ontario Championships U15 Silver Medal",
            photo: "/members/valerie-poon.jpg",
            achievements: [
                "2024 Ontario Championships U15 Girls Doubles Silver Medal",
                "2022 Ontario Championships Women’s Singles Semifinalist",
                "2022 Ontario Fall Cup U15 Girls Singles Quarterfinalist",
                "2022 Ontario Fall Cup Class 6 Silver Medal",
            ],
        },
        {
            name: "Owen Hu",
            headline: "2024 US Open U1800 Singles Champion",
            photo: "/members/owen-hu.jpg",
            achievements: [
                "2024 US Open U1800 Singles Champion",
                "2024 Ontario Championships U15 Boys Doubles Champion",
                "2024 Ontario Summer Games U15 Boys Doubles Bronze Medal",
                "2024 Ontario CCTTA Top 8 MAR U17 Quarterfinalist",
                "2024 Ontario CCTTA Top 8 JAN U19 Silver Medal",
                "2023 JOOLA North American Teams Championships D11 Champion",
            ],
        },
    ];

    const getInitials = (name) =>
        name
            .split(" ")
            .filter(Boolean)
            .map((part) => part[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    
    const handleImageError = (name) => {
        setImageErrors((prev) => ({ ...prev, [name]: true }));
    };

    return (
        <motion.div 
            className="w-dvw min-h-screen flex flex-col items-center bg-gradient-to-br via-black from-red-900 to-red-900"
        >
            <Navbar />
            <div className="flex flex-1 flex-col items-center w-full px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mt-8 mb-8 text-center"
                >
                    Members
                </motion.div>

                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
                        {members.map((member) => (
                            <motion.button
                                key={member.name}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveMember(member)}
                                className="flex flex-col items-center text-center bg-black/30 border border-red-700/40 rounded-xl p-4 hover:border-red-500/70 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-red-600/30 border border-red-600/60 flex items-center justify-center text-white font-bold text-lg mb-3 relative overflow-hidden">
                                    {member.photo && !imageErrors[member.name] && (
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={() => handleImageError(member.name)}
                                        />
                                    )}
                                    <span className="relative z-10">{getInitials(member.name)}</span>
                                </div>
                                <div className="text-white font-semibold">{member.name}</div>
                                <div className="text-red-300 text-sm mt-1">{member.headline}</div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {activeMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                    onClick={() => setActiveMember(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="w-full max-w-lg rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-red-700/50 p-6 text-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-red-600/30 border border-red-600/60 flex items-center justify-center text-white font-bold text-lg relative overflow-hidden">
                                    {activeMember.photo && !imageErrors[activeMember.name] && (
                                        <img
                                            src={activeMember.photo}
                                            alt={activeMember.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={() => handleImageError(activeMember.name)}
                                        />
                                    )}
                                    <span className="relative z-10">{getInitials(activeMember.name)}</span>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{activeMember.name}</div>
                                    <div className="text-red-300 text-sm mt-1">{activeMember.headline}</div>
                                </div>
                            </div>
                            <button
                                className="text-gray-300 hover:text-white text-2xl leading-none"
                                onClick={() => setActiveMember(null)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>
                        <div className="mt-4">
                            <div className="text-gray-300 text-sm uppercase tracking-wide mb-2">
                                Achievements
                            </div>
                            <ul className="text-gray-200 text-sm sm:text-base leading-relaxed space-y-2">
                                {activeMember.achievements.map((achievement) => (
                                    <li key={achievement} className="flex gap-2">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
}

export default Members;