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
        className={`absolute p-0.5 rounded-2xl opacity-70  overflow-hidden ${
          rotate || "-rotate-45"
        }`}
        style={{ left: xAxis, top: yAxis }}
      >
        <style>{`
@keyframes floating-border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-floating-border-spin {
  animation: floating-border-spin 4s linear infinite;
}
`}</style>
        <div className="absolute inset-[-150%] animate-floating-border-spin bg-[conic-gradient(from_0deg,#8b5cf6,#3b82f6,#06b6d4,#ec4899,#8b5cf6)] " />
        <div className="relative rounded-[14px] overflow-visible ">
          <div className="relative p-5 rounded-[14px] bg-[#0B0F19]/70  backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.18)]">
            {fun}
          </div>
          <div
            className={`absolute ${iconYAxis} ${iconXAxis} z-100 w-14 h-14 p-0.5 rounded-full overflow-hidden`}
          >
            <div className="absolute inset-[-120%] animate-floating-border-spin bg-[conic-gradient(from_0deg,#8b5cf6,#3b82f6,#06b6d4,#ec4899,#8b5cf6)]" />
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
  stateOptimization: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">function</span>{" "}
      <span className="text-gray-100">useAuthUser()</span> {"{\n"}
      {"  "}
      <span className="text-purple-400">const</span> [user, setUser] ={" "}
      <span className="text-purple-400">useState</span>(
      <span className="text-blue-400">null</span>);{"\n"}
      {"  "}
      <span className="text-purple-400">useEffect</span>(() =&gt; {"{\n"}
      {"    "}
      <span className="text-purple-400">const</span> session ={" "}
      <span className="text-gray-100">supabase.auth.getSession();</span>
      {"\n"}
      {"    "}
      <span className="text-gray-100">setUser(session?.user ?? </span>
      <span className="text-blue-400">null</span>);{"\n"}
      {"  }"}, []);{"\n"}
      {"  "}
      <span className="text-purple-400">return</span> {"{ user };"}\n{"}"}
    </pre>
  ),
  authentication: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">function</span>{" "}
      <span className="text-gray-100">generateToken(userPayload)</span> {"{\n"}
      {"  "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-gray-100">jwt.sign(</span>
      {"{ ...userPayload },"}{" "}
      <span className="text-gray-100">process.env.JWT_SECRET,</span> {"{\n"}
      {"    "}
      <span className="text-gray-100">expiresIn:</span>{" "}
      <span className="text-teal-400">{"24h"}</span>
      {"\n"}
      {"  }"});{"\n"}
      {"}"}
    </pre>
  ),
  nextAppRouter: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">export async function</span>{" "}
      <span className="text-gray-100">POST(req)</span> {"{\n"}
      {"  "}
      <span className="text-purple-400">const</span> body ={" "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-gray-100">req.json();</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">if</span> (!body.email) {"{\n"}
      {"    "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-gray-100">NextResponse.json(</span>
      {"{ error: "}
      <span className="text-teal-400">{"Missing email"}</span>
      {" },"} {"{ status: "}
      <span className="text-teal-400">400</span>
      {" });\n"}
      {"  "}
      {"}\n"}
      {"  "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-gray-100">NextResponse.json(</span>
      {"{ success: "}
      <span className="text-blue-400">true</span>
      {" },"} {"{ status: "}
      <span className="text-teal-400">201</span>
      {" });\n"}
      {"}"}
    </pre>
  ),
  paymentWebhook: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">function</span>{" "}
      <span className="text-gray-100">handlePaymentSuccess(session)</span>{" "}
      {"{\n"}
      {"  "}
      <span className="text-purple-400">const</span> customerEmail ={" "}
      <span className="text-gray-100">session.customer_details.email;</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-gray-100">db.user.update(</span>
      {"{\n"}
      {"    "}
      <span className="text-gray-100">where:</span>{" "}
      {"{ email: customerEmail },"}\n
      {"    "}
      <span className="text-gray-100">data:</span> {"{ isPremium: "}
      <span className="text-blue-400">true</span> {"}"}\n
      {"  }"});{"\n"}
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
  selfImprovement: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">UPDATE</span>{" "}
      <span className="text-gray-100">developer_mindset</span>
      {"\n"}
      <span className="text-purple-400">SET</span>{" "}
      <span className="text-gray-100">imposter_syndrome =</span>{" "}
      <span className="text-blue-400">FALSE</span>,{"\n"}
      {"    "}
      <span className="text-gray-100">confidence = confidence +</span>{" "}
      <span className="text-teal-400">10</span>,{"\n"}
      {"    "}
      <span className="text-gray-100">latest_stack =</span>{" "}
      <span className="text-teal-400">{"NextJS + SocketIO"}</span>
      {"\n"}
      <span className="text-purple-400">WHERE</span>{" "}
      <span className="text-gray-100">experience_level &gt;=</span>{" "}
      <span className="text-teal-400">0</span>;
    </pre>
  ),
  retryingFailedRequests: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">async function</span>{" "}
      <span className="text-gray-100">executeWithPersistence(attempt)</span>{" "}
      {"{\n"}
      {"  "}
      <span className="text-purple-400">try</span> {"{\n"}
      {"    "}
      <span className="text-purple-400">return await</span>{" "}
      <span className="text-gray-100">achieveGoal();</span>
      {"\n"}
      {"  "}
      {"} "}
      <span className="text-purple-400">catch</span> (error) {"{\n"}
      {"    "}
      <span className="text-purple-400">if</span> (attempt &gt;{" "}
      <span className="text-teal-400">5</span>){" "}
      <span className="text-purple-400">throw</span> error;{"\n"}
      {"    "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-gray-100">sleep(</span>
      <span className="text-teal-400">1000 * attempt</span>
      <span className="text-gray-100">);</span>
      {"\n"}
      {"    "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-gray-100">executeWithPersistence(attempt + </span>
      <span className="text-teal-400">1</span>
      <span className="text-gray-100">);</span>
      {"\n"}
      {"  }"}\n{"}"}
    </pre>
  ),
  focusDeepWork: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">async function</span>{" "}
      <span className="text-gray-100">enterDeepWorkMode(socket, devId)</span>{" "}
      {"{\n"}
      {"  "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-gray-100">socket.leave(</span>
      <span className="text-teal-400">{"global_distractions"}</span>
      <span className="text-gray-100">);</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-gray-100">socket.join(</span>
      <span className="text-teal-400">{`'focus_room_\${devId}'`}</span>
      <span className="text-gray-100">);</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">io.to</span>(
      <span className="text-teal-400">{`'focus_room_\${devId}'`}</span>).
      <span className="text-gray-100">emit(</span>
      <span className="text-teal-400">{"status"}</span>,{" "}
      <span className="text-teal-400">{"Building..."}</span>);{"\n"}
      {"}"}
    </pre>
  ),
  mentalHealthBurnout: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">function</span>{" "}
      <span className="text-gray-100">monitorDeveloperHealth(devId)</span>{" "}
      {"{\n"}
      {"  "}
      <span className="text-purple-400">const</span> status ={" "}
      <span className="text-purple-400">await</span>{" "}
      <span className="text-gray-100">checkEnergyLevel(devId);</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">if</span> (status.burnoutRisk ==={" "}
      <span className="text-blue-400">true</span>) {"{\n"}
      {"    "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-gray-100">triggerEmergencyBreak();</span>
      {"\n"}
      {"  "}
      {"}\n"}
      {"  "}
      <span className="text-purple-400">return</span>{" "}
      <span className="text-teal-400">{"Keep coding responsibly"}</span>;{"\n"}
      {"}"}
    </pre>
  ),
  networkingRelationships: (
    <pre className="font-mono text-xs md:text-sm leading-relaxed m-0 pr-8">
      <span className="text-purple-400">io.on</span>(
      <span className="text-teal-400">{"connection"}</span>, (
      <span className="text-gray-100">socket</span>) =&gt; {"{\n"}
      {"  "}
      <span className="text-gray-100">console.log(</span>
      <span className="text-teal-400">{"New connection established"}</span>
      <span className="text-gray-100">);</span>
      {"\n"}
      {"  "}
      <span className="text-purple-400">socket.on</span>(
      <span className="text-teal-400">{"shareThoughts"}</span>, (
      <span className="text-gray-100">data</span>) =&gt; {"{\n"}
      {"    "}
      <span className="text-purple-400">socket.broadcast.emit</span>(
      <span className="text-teal-400">{"inspireOthers"}</span>,{" "}
      <span className="text-gray-100">data);</span>
      {"\n"}
      {"  "}
      {"});"}\n
      {"  "}
      <span className="text-purple-400">socket.on</span>(
      <span className="text-teal-400">{"disconnect"}</span>, () =&gt; {" {\n"}
      {"    "}
      <span className="text-gray-100">cleanUpEmptySpace();</span>
      {"\n"}
      {"  "}
      {"});"}\n
      {"});"}
    </pre>
  ),
};
