import { Medal, Trophy, Target, Globe, Users, Award, Crown, GraduationCap } from "lucide-react";
import { Link } from 'react-router-dom';

const CoachSix = () => {
    const background = [
        { 
            title: "Former Bayi Team Member",
            description: "Professional table tennis team experience",
            icon: Users
        },
        { 
            title: "Former Coach",
            description: "Singapore Table Tennis Association",
            icon: Globe
        },
        { 
            title: "Former Coach",
            description: "ZhengDing Chinese National Training Centre",
            icon: Award
        }
    ];

    const certifications = [
        { 
            title: "NCCP Certified Table Tennis Coach",
            description: "Nationally recognized coaching certification",
            icon: Award
        },
        { 
            title: "Singapore Certified National Table Tennis Coach",
            description: "National coaching certification from Singapore",
            icon: GraduationCap
        },
        { 
            title: "International Sports Association Certified Table Tennis Coach",
            description: "Internationally recognized coaching certification",
            icon: Globe
        },
        { 
            title: "Chinese National Intermediate Table Tennis Certified Coach",
            description: "Intermediate level coaching certification from China",
            icon: Crown
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
                <div className="relative px-6 py-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent leading-normal">
                            Amy Ting Guo
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            Head Coach & Certified Table Tennis Professional
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-16">
                {/* Background & Experience Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8 mt-[20px]">
                        <Users className="w-8 h-8 text-red-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">Background & Experience</h2>
                    </div>
                    <div className="space-y-6">
                        {background.map((item, index) => {
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

                {/* Certifications Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <Award className="w-8 h-8 text-yellow-500 mr-4" />
                        <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => {
                            const IconComponent = cert.icon;
                            return (
                                <div key={index} className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="flex items-start">
                                        <IconComponent className="w-8 h-8 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-yellow-300">{cert.title}</h3>
                                            <p className="text-gray-200 text-lg leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Summary Stats */}
                <section className="mt-16">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">Professional Summary</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-yellow-400">4</div>
                                <div className="text-gray-300">Certifications</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-red-400">3</div>
                                <div className="text-gray-300">Professional Roles</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-blue-400">3</div>
                                <div className="text-gray-300">Countries</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoachSix;

