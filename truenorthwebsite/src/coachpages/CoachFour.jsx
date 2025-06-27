import { Medal, Trophy, Globe, Crown, Star } from "lucide-react";

const CoachFour = () => {
  // Data arrays for each section
  const olympicGames = [
    {
      year: "2020",
      location: "Tokyo",
      placement: "Women's Team: 5th place",
    },
  ];

  const commonwealthGames = [
    {
      year: "2014",
      location: "Glasgow",
      medals: [
        { type: "gold", achievement: "Women's Team" },
        { type: "bronze", achievement: "Women's Singles" },
      ],
    },
  ];

  const seaGames = [
    {
      year: "2015",
      location: "Singapore",
      medals: [
        {
          type: "gold",
          achievement:
            "Women's Doubles (with Zhou Yihan), defeating top seeds Feng Tianwei and Yu Mengyu",
        },
      ],
    },
  ];
  const seaSummary =
    "Accumulated a total of 6 Gold, 2 Silver, and 3 Bronze medals across various SEA Games editions.";

  const ittfWorldTour = [
    {
      year: "2015",
      location: "Lisbon",
      title:
        "U21 Women's Singles Champion at the ITTF World Tour Grand Finals, defeating Japan’s Yui Hamamoto",
    },
  ];

  // Helpers for medal colours
  const getMedalColor = (type) => {
    switch (type) {
      case "gold":
        return "text-yellow-400";
      case "silver":
        return "text-gray-300";
      case "bronze":
        return "text-amber-600";
      default:
        return "text-blue-400";
    }
  };

  const getMedalGradient = (type) => {
    switch (type) {
      case "gold":
        return "from-yellow-600/30 to-yellow-800/30";
      case "silver":
        return "from-gray-600/30 to-gray-800/30";
      case "bronze":
        return "from-amber-600/30 to-amber-800/30";
      default:
        return "from-blue-600/30 to-blue-800/30";
    }
  };

  // Career summary stats
  const careerStats = [
    { count: "1", label: "Commonwealth Gold", type: "gold" },
    { count: "1", label: "Commonwealth Bronze", type: "bronze" },
    { count: "6", label: "SEA Gold", type: "gold" },
    { count: "2", label: "SEA Silver", type: "silver" },
    { count: "3", label: "SEA Bronze", type: "bronze" },
    { count: "1", label: "ITTF U21 Title", type: "gold" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ye Lin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Elite Table Tennis Athlete
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Olympic Games */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Globe className="w-8 h-8 text-green-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Olympic Games</h2>
          </div>
          <div className="space-y-6">
            {olympicGames.map((game, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/30 rounded-xl p-6 border border-purple-700/50 hover:border-purple-500/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-purple-400">
                      {game.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">
                      {game.location}
                    </h3>
                  </div>
                  <Medal className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-gray-200">{game.placement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commonwealth Games */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="w-8 h-8 text-yellow-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Commonwealth Games</h2>
          </div>
          <div className="space-y-6">
            {commonwealthGames.map((game, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-yellow-400">
                      {game.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">
                      {game.location}
                    </h3>
                  </div>
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="space-y-2">
                  {game.medals.map((m, j) => (
                    <div key={j} className="flex items-center">
                      <Medal
                        className={`w-5 h-5 mr-3 ${getMedalColor(m.type)}`}
                      />
                      <span className={`font-medium ${getMedalColor(m.type)} mr-2`}>
                        {m.type.charAt(0).toUpperCase() + m.type.slice(1)}:
                      </span>
                      <span className="text-gray-200">{m.achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEA Games */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Crown className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Southeast Asian (SEA) Games
            </h2>
          </div>
          <div className="space-y-6">
            {seaGames.map((game, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/30 rounded-xl p-6 border border-purple-700/50 hover:border-purple-500/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-purple-400">
                      {game.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">
                      {game.location}
                    </h3>
                  </div>
                  <Crown className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-2">
                  {game.medals.map((m, j) => (
                    <div key={j} className="flex items-center">
                      <Medal
                        className={`w-5 h-5 mr-3 ${getMedalColor(m.type)}`}
                      />
                      <span className={`font-medium ${getMedalColor(m.type)} mr-2`}>
                        {m.type.charAt(0).toUpperCase() + m.type.slice(1)}:
                      </span>
                      <span className="text-gray-200">{m.achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-gray-200 italic">{seaSummary}</p>
          </div>
        </section>

        {/* ITTF World Tour */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">ITTF World Tour</h2>
          </div>
          <div className="space-y-6">
            {ittfWorldTour.map((tour, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/30 rounded-xl p-6 border border-purple-700/50 hover:border-purple-500/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-purple-400">
                      {tour.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">
                      {tour.location}
                    </h3>
                  </div>
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-gray-200">{tour.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Summary Stats */}
        <section>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">
              Career Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
              {careerStats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className={`text-3xl font-bold ${getMedalColor(stat.type)}`}>
                    {stat.count}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoachFour;
