export default function AboutSection() {
  const stats = [
    { value: "4+", label: "Years Experience", icon: "</>" },
    { value: "20+", label: "Projects Completed", icon: "📁" },
    { value: "15+", label: "Happy Clients", icon: "😊" },
    { value: "5", label: "Awards Received", icon: "🏆" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-surface border border-gray-800 p-6 rounded-xl flex flex-col items-start gap-2 hover:border-purple-500/50 transition"
        >
          <div className="text-2xl">{stat.icon}</div>
          <div className="text-3xl font-bold text-white">{stat.value}</div>
          <div className="text-textMuted text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
