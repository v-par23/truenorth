import { Medal, Trophy, Target, Globe } from "lucide-react";
import { Link } from 'react-router-dom';

const CoachOne = () => {
  const olympicGames = [
    { year: "2012", location: "London Olympics", event: "Men's Team", result: "9th place" },
    { year: "2016", location: "Rio Olympics", event: "Men's Singles", result: "Reached Round of 32" },
    { year: "2020", location: "Tokyo Olympics", event: "Mixed Doubles", result: "9th place" },
    { year: "2024", location: "Paris Olympics", event: "Men's Team", result: "9th place" }
  ];

  const panAmGames = [
    { year: "2015", location: "Toronto", medals: ["Bronze Medal in Men's Singles", "Bronze Medal in Men's Team"] },
    { year: "2019", location: "Lima", medals: ["Gold Medal in Mixed Doubles", "Bronze Medal in Men's Singles"] },
    { year: "2023", location: "Santiago", medals: ["Silver Medal in Men's Team", "Bronze Medal in Men's Singles", "Bronze Medal in Mixed Doubles"] }
  ];

  const panAmChampionships = [
    { year: "2021", location: "Lima", achievement: "Silver Medal in Men's Singles" },
    { year: "2023", location: "", achievement: "Silver Medal in Men's Team" }
  ];

  const internationalHighlights = [
    "2013 ITTF World Tour Grand Finals – Reached Round of 16; faced Fan Zhendong",
    "U.S. Open – Five-time finalist with three championship titles"
  ];

  const getMedalColor = (medal) => {
    if (medal.includes("Gold")) return "text-yellow-400";
    if (medal.includes("Silver")) return "text-gray-300";
    if (medal.includes("Bronze")) return "text-amber-600";
    return "text-blue-400";
  };

  // compute simple stats
  const totalPanAmMedals = panAmGames.reduce(
    (sum, g) => sum + g.medals.length,
    0
  );
  const totalUsOpenTitles = 3; // from your highlight text

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
        <div className="relative px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent leading-normal">
              Eugene Wang
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Table Tennis Champion & Coach
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Olympic Games */}
        <section className="mb-16">
          <div className="flex items-center mb-8 mt-[20px]">
            <Target className="w-8 h-8 text-red-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Olympic Games Participation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {olympicGames.map((game, i) => (
              <div
                key={i}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl font-bold text-red-400">{game.year}</span>
                  <Globe className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{game.location}</h3>
                <p className="text-gray-300 mb-2">{game.event}</p>
                <p className="text-blue-400 font-medium">{game.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pan American Games */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Medal className="w-8 h-8 text-yellow-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Pan American Games Achievements</h2>
          </div>
          <div className="space-y-6">
            {panAmGames.map((game, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-6 border border-gray-600"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-yellow-400 mr-4">
                    {game.year}
                  </span>
                  <h3 className="text-xl font-semibold">{game.location}</h3>
                </div>
                <div className="space-y-2">
                  {game.medals.map((medal, j) => (
                    <div key={j} className="flex items-center">
                      <Medal className={`w-5 h-5 mr-3 ${getMedalColor(medal)}`} />
                      <span className="text-gray-200">{medal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pan American Championships */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="w-8 h-8 text-gray-300 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Pan American Championships</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {panAmChampionships.map((c, i) => (
              <div
                key={i}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-gray-300 mr-4">
                    {c.year}
                  </span>
                  {c.location && <span className="text-gray-400">{c.location}</span>}
                </div>
                <div className="flex items-center">
                  <Medal className="w-5 h-5 text-gray-300 mr-3" />
                  <span className="text-gray-200">{c.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International Highlights */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Globe className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">International Highlights</h2>
          </div>
          <div className="space-y-4">
            {internationalHighlights.map((h, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-700/50"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-200 text-lg leading-relaxed">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Highlights */}
        <section>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-200">
              Career Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* Olympic Appearances */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">
                  {olympicGames.length}
                </div>
                <div className="text-gray-300 text-sm">Olympic Games</div>
              </div>

              {/* Pan Am Games Medals */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-400">
                  {totalPanAmMedals}
                </div>
                <div className="text-gray-300 text-sm">Pan Am Games Medals</div>
              </div>

              {/* Pan Am Champs Medals */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-300">
                  {panAmChampionships.length}
                </div>
                <div className="text-gray-300 text-sm">
                  Pan Am Championships
                </div>
              </div>

              {/* U.S. Open Titles */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">
                  {totalUsOpenTitles}
                </div>
                <div className="text-gray-300 text-sm">U.S. Open Titles</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoachOne;
