import { Medal, Trophy, Target, Globe, Users, Award, Crown } from "lucide-react";

const CoachTwo = () => {
    const coachingLeadership = [
        { 
            title: "NCCP Certified Chartered Professional Coach",
            description: "Nationally recognized professional coaching certification",
            icon: Award
        },
        { 
            title: "Head Coach, Team Canada",
            description: "2020 Tokyo Olympics, 2024 Paris Olympics",
            icon: Users
        },
        { 
            title: "Current Canadian Ranking",
            description: "No. 2 (since 2012)",
            icon: Crown
        }
    ];

    const internationalHighlights = [
        { 
            achievement: "ITTF Global Junior Circuit Finals",
            result: "Bronze Medalist",
            type: "bronze"
        },
        { 
            achievement: "North American Championships",
            result: "Men's Singles Silver Medalist, Junior Champion",
            type: "silver"
        },
        { 
            achievement: "U.S. Open U21",
            result: "Champion",
            type: "gold"
        }
    ];

    const canadianNationals = [
        { event: "Men's Singles", result: "Runner-Up", type: "silver" },
        { event: "Men's Teams", result: "Champion", type: "gold" },
        { event: "Men's Doubles", result: "Champion", type: "gold" },
        { event: "Mixed Doubles", result: "Champion", type: "gold" }
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
                <div className="relative px-6 py-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                            Hongtao Chen
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            Elite Coach & Table Tennis Champion
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-16">
                {/* Coaching & Leadership Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Users className="w-8 h-8 text-red-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">Coaching & Leadership</h2>
                    </div>
                    <div className="space-y-6">
                        {coachingLeadership.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-xl p-6 border border-red-700/50 hover:border-red-500/70 transition-all duration-300 hover:transform hover:scale-[1.02]">
                                    <div className="flex items-start">
                                        <IconComponent className="w-8 h-8 text-red-400 mr-4 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-red-300">{item.title}</h3>
                                            <p className="text-gray-200 text-lg leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* International Career Highlights Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Globe className="w-8 h-8 text-blue-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">International Career Highlights</h2>
                    </div>
                    <div className="grid md:grid-cols-1 gap-6">
                        {internationalHighlights.map((highlight, index) => (
                            <div key={index} className={`bg-gradient-to-r ${getMedalGradient(highlight.type)} rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Medal className={`w-6 h-6 mr-4 ${getMedalColor(highlight.type)}`} />
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{highlight.achievement}</h3>
                                            <p className={`font-medium ${getMedalColor(highlight.type)}`}>{highlight.result}</p>
                                        </div>
                                    </div>
                                    <Trophy className="w-8 h-8 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Canadian National Championships Section */}
                <section>
                    <div className="flex items-center mb-8">
                        <Target className="w-8 h-8 text-yellow-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">Canadian National Championships</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {canadianNationals.map((championship, index) => (
                            <div key={index} className={`bg-gradient-to-r ${getMedalGradient(championship.type)} rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105`}>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-semibold">{championship.event}</h3>
                                    <Medal className={`w-6 h-6 ${getMedalColor(championship.type)}`} />
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                                    <span className={`text-lg font-medium ${getMedalColor(championship.type)}`}>
                                        {championship.result}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Summary Stats */}
                <section className="mt-16">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">Career Summary</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">3</div>
                                <div className="text-gray-300">National Titles</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-red-400">2</div>
                                <div className="text-gray-300">Olympic Games</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-blue-400">#2</div>
                                <div className="text-gray-300">Canadian Ranking</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-400">13+</div>
                                <div className="text-gray-300">Years Coaching</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoachTwo;