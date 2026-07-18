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
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <div
          className={`absolute p-5 rounded-2xl border border-purple-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.2)] flex items-center justify-center text-slate-300 ${rotate || "-rotate-45"}`}
          style={{ left: xAxis, top: yAxis }}
        >
          {fun}
          <div
            className={`absolute ${iconYAxis} ${iconXAxis} flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md`}
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/5">
              <span className="text-blue-300 font-mono font-bold text-xl tracking-tighter">
                {icon}
              </span>
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
