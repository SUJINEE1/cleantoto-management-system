// pages/index.tsx
import React, { useState } from "react";

// 각 탭에 대응할 컴포넌트 (지금은 비워둔 상태)
import SiteReportTab from "../components/SiteReportTab";
import AccountReportTab from "../components/AccountReportTab";
import RewardReportTab from "../components/RewardReportTab";
import ReporterManagementTab from "../components/ReporterManagementTab";
import MonitoringTab from "../components/MonitoringTab";

export default function Home() {
  const [tab, setTab] = useState("사이트신고");

  const tabs = ["사이트신고", "계좌신고", "포상내역", "신고인관리", "모니터링단"];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">📋 신고 관리 시스템</h1>

      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded ${
              tab === t
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        {tab === "사이트신고" && <SiteReportTab />}
        {tab === "계좌신고" && <AccountReportTab />}
        {tab === "포상내역" && <RewardReportTab />}
        {tab === "신고인관리" && <ReporterManagementTab />}
        {tab === "모니터링단" && <MonitoringTab />}
      </div>
    </div>
  );
}
