import { Medal, Trophy, Target, Globe, Crown, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const CoachThree = () => {
    const panAmGames = [
        { 
            year: "2019", 
            location: "Lima", 
            medals: [
                { type: "gold", achievement: "Women's Singles" },
                { type: "bronze", achievement: "Women's Team" }
            ]
        },
        { 
            year: "2015", 
            location: "Toronto", 
            medals: [
                { type: "silver", achievement: "Women's Singles" },
                { type: "bronze", achievement: "Women's Team" }
            ]
        },
        { 
            year: "2011", 
            location: "Guadalajara", 
            medals: [
                { type: "gold", achievement: "Women's Singles" },
                { type: "bronze", achievement: "Women's Team" }
            ]
        },
        { 
            year: "2007", 
            location: "Rio de Janeiro", 
            medals: [
                { type: "bronze", achievement: "Women's Singles" }
            ]
        }
    ];

    const panAmChampionships = [
        {
            year: "2018",
            location: "Santiago",
            medals: [
                { type: "silver", achievement: "Women's Singles" },
                { type: "bronze", achievement: "Women's Doubles (with Alicia Côté)" }
            ]
        },
        {
            year: "2017",
            location: "Cartagena",
            medals: [
                { type: "gold", achievement: "Women's Singles" },
                { type: "bronze", achievement: "Women's Team" }
            ]
        }
    ];

    const northAmericanChampionships = [
        { year: "2009", title: "Champion" },
        { year: "2010", title: "Champion" },
        { year: "2011", title: "Champion" },
        { year: "2014", title: "Champion" }
    ];

    const ittfPanAmCup = [
        { year: "2018", type: "gold", achievement: "Women's Singles" },
        { year: "2017", type: "silver", achievement: "Women's Singles" },
        { year: "2019", type: "silver", achievement: "Women's Singles" },
        { year: "2024", type: "bronze", achievement: "Women's Singles" },
        { year: "2025", type: "bronze", achievement: "Women's Singles" }
    ];

    const getMedalColor = (type) => {
        switch(type) {
            case "gold": return "text-yellow-400";
            case "silver": return "text-gray-300";
            case "bronze": return "text-amber-600";
            default: return "text-blue-400";
        }
    };

    const getMedalGradient = (type) => {
        switch(type) {
            case "gold": return "from-yellow-600/30 to-yellow-800/30";
            case "silver": return "from-gray-600/30 to-gray-800/30";
            case "bronze": return "from-amber-600/30 to-amber-800/30";
            default: return "from-blue-600/30 to-blue-800/30";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
                <div className="relative px-6 py-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Mo Zhang
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            Pan American Games Champion & Elite Table Tennis Coach
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-16">
                {/* Pan American Games Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Target className="w-8 h-8 text-purple-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">Pan American Games</h2>
                    </div>
                    <div className="space-y-6">
                        {panAmGames.map((game, index) => (
                            <div key={index} className="bg-gradient-to-r from-purple-900/50 to-pink-900/30 rounded-xl p-6 border border-purple-700/50 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-[1.02]">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-2xl font-bold text-purple-400">{game.year}</span>
                                        <h3 className="text-xl font-semibold mt-1">{game.location}</h3>
                                    </div>
                                    <Globe className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="space-y-3">
                                    {game.medals.map((medal, medalIndex) => (
                                        <div key={medalIndex} className="flex items-center">
                                            <Medal className={`w-5 h-5 mr-3 ${getMedalColor(medal.type)}`} />
                                            <span className={`font-medium ${getMedalColor(medal.type)} mr-2`}>
                                                {medal.type.charAt(0).toUpperCase() + medal.type.slice(1)} Medal:
                                            </span>
                                            <span className="text-gray-200">{medal.achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pan American Championships Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Trophy className="w-8 h-8 text-yellow-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">Pan American Championships</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {panAmChampionships.map((championship, index) => (
                            <div key={index} className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-2xl font-bold text-yellow-400">{championship.year}</span>
                                        <h3 className="text-lg font-semibold mt-1">{championship.location}</h3>
                                    </div>
                                    <Trophy className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div className="space-y-2">
                                    {championship.medals.map((medal, medalIndex) => (
                                        <div key={medalIndex} className="flex items-center">
                                            <Medal className={`w-4 h-4 mr-3 ${getMedalColor(medal.type)}`} />
                                            <span className="text-gray-200 text-sm">{medal.achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* North American Championships Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Crown className="w-8 h-8 text-blue-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">North American Championships</h2>
                        <div className="ml-4 text-lg text-blue-400 font-semibold">Women's Singles</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 rounded-xl p-6 border border-blue-700/50">
                        <div className="flex items-center mb-4">
                            <Star className="w-6 h-6 text-blue-400 mr-3" />
                            <h3 className="text-xl font-bold text-blue-300">4-Time Champion</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {northAmericanChampionships.map((championship, index) => (
                                <div key={index} className="text-center p-3 bg-blue-800/30 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-400">{championship.year}</div>
                                    <div className="text-sm text-gray-300">{championship.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ITTF Pan American Cup Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Globe className="w-8 h-8 text-green-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">ITTF Pan American Cup</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ittfPanAmCup.map((cup, index) => (
                            <div key={index} className={`bg-gradient-to-r ${getMedalGradient(cup.type)} rounded-xl p-4 border border-gray-600 hover:border-green-500/50 transition-all duration-300`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xl font-bold text-green-400">{cup.year}</span>
                                    <Medal className={`w-5 h-5 ${getMedalColor(cup.type)}`} />
                                </div>
                                <div className="flex items-center">
                                    <span className={`font-medium ${getMedalColor(cup.type)}`}>
                                        {cup.type.charAt(0).toUpperCase() + cup.type.slice(1)} Medal
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm mt-1">{cup.achievement}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Career Summary Stats */}
                <section>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">Career Highlights</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">3</div>
                                <div className="text-gray-300 text-sm">Pan Am Gold</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-gray-300">3</div>
                                <div className="text-gray-300 text-sm">Pan Am Silver</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-amber-600">7</div>
                                <div className="text-gray-300 text-sm">Pan Am Bronze</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-blue-400">4</div>
                                <div className="text-gray-300 text-sm">N.A. Titles</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoachThree;