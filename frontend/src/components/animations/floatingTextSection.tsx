import React from "react";

export const FloatingTextSection = ({
  xAxis,
  yAxis,
  iconXAxis,
  iconYAxis,
  fun,
  icon,
  rotate,
}: {
  xAxis: string;
  yAxis: string;
  iconXAxis: string;
  iconYAxis: string;
  fun?: React.ReactNode;
  icon?: React.ReactNode | string;
  rotate?: string;
}) => {
  return (
    <>
      <div
        className={`absolute p-0.5 rounded-2xl  overflow-hidden ${
          rotate || "-rotate-45"
        }`}
        style={{ left: xAxis, top: yAxis }}
      >
        <style>{`
       @keyframes border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-border-spin {
  animation: border-spin 4s linear infinite;
}
      `}</style>
        <div className="absolute inset-[-150%] animate-border-spin bg-[conic-gradient(from_0deg,#8b5cf6,#3b82f6,#06b6d4,#ec4899,#8b5cf6)] " />
        <div className="relative rounded-[14px] overflow-visible ">
          <div className="relative p-5 rounded-[14px] bg-[#0B0F19]/70  backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.18)]">
            {fun}
          </div>
          <div
            className={`absolute ${iconYAxis} ${iconXAxis} z-100 w-14 h-14 p-0.5 rounded-full overflow-hidden`}
          >
            <div className="absolute inset-[-120%] animate-border-spin bg-[conic-gradient(from_0deg,#8b5cf6,#3b82f6,#06b6d4,#ec4899,#8b5cf6)]" />
            <div className="relative flex items-center justify-center w-full h-full rounded-full bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10">
                <span className="text-blue-300 font-mono font-bold text-xl tracking-tighter">
                  {icon}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const FloatingTextData = {
  professionalBottom: (
    <pre className="font-mono text-sm md:text-base leading-relaxed m-0 pr-8">
      <span className="text-purple-400">function</span>{" "}
      <span className="text-gray-100">createImpact()</span> {"{\n"}
      {"  "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-teal-400">{`'Code + Design + Impact'`}</span>;{"\n"}
      {"}"}
    </pre>
  ),
  professionalTop: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">SELECT</span>{" "}
      <span className="text-gray-100">dev.name, designer.vision</span>
      {"\n"}
      <span className="text-purple-400">FROM</span>{" "}
      <span className="text-gray-100">developers dev</span>
      {"\n"}
      <span className="text-purple-400">INNER JOIN</span>{" "}
      <span className="text-gray-100">designers</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">ON</span>{" "}
      <span className="text-gray-100">
        dev.project_id = designer.project_id
      </span>
      {"\n"}
      <span className="text-purple-400">WHERE</span>{" "}
      <span className="text-gray-100">synergy_level &gt;</span>{" "}
      <span className="text-teal-400">9000</span>;
    </pre>
  ),
};
