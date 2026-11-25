function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-red-600 tracking-wider mb-6 flex items-center gap-3">
        SITH EXPERIENCE
        <span className="h-[2px] flex-grow bg-gradient-to-r from-red-600 to-transparent"></span>
      </h2>

      <div className="space-y-8">
        {/* Позиція 1 */}
        <div className="relative pl-6 border-l-2 border-red-800/60 group hover:border-red-500 transition-colors">
          <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.9)]"></div>
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
            Supreme Commander
          </h3>
          <p className="text-sm text-red-500 font-semibold mb-2">Galactic Empire | 19 BBY - 4 ABY</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1.5 text-sm">
            <li>Oversaw the construction of the two biggest weapons of our time - The Death Stars.</li>
            <li>Managed to locate the rebel base through interrogation (and blowing up a planet).</li>
            <li>Negotiated a deal with Baron Lando to capture Luke Skywalker.</li>
          </ul>
        </div>

        {/* Позиція 2 */}
        <div className="relative pl-6 border-l-2 border-red-800/60 group hover:border-red-500 transition-colors">
          <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.9)]"></div>
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
            Senior Dark Lord of the Sith
          </h3>
          <p className="text-sm text-red-500 font-semibold mb-2">Sith Lords Union | 19 BBY - 4 ABY</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1.5 text-sm">
            <li>Executed Order 66, tracking down and eliminating the last of the Jedi.</li>
            <li>Created a personal 10 mil droid army through Doctor Aphra's matrix.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;