import React, { useState } from "react";
import SiteReportTab from "../components/SiteReportTab";
import AccountReportTab from "../components/AccountReportTab";
import RewardReportTab from "../components/RewardReportTab";
import ReporterManagementTab from "../components/ReporterManagementTab";
import MonitoringTab from "../components/MonitoringTab";

export default function Home() {
  const [tab, setTab] = useState("사이트신고");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">신고 관리 시스템</h1>
      <div className="flex space-x-4 mb-6">
        {["사이트신고", "계좌신고", "포상내역", "신고인관리", "모니터링단"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded ${
              tab === t ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "사이트신고" && <SiteReportTab />}
      {tab === "계좌신고" && <AccountReportTab />}
      {tab === "포상내역" && <RewardReportTab />}
      {tab === "신고인관리" && <ReporterManagementTab />}
      {tab === "모니터링단" && <MonitoringTab />}
    </div>
  );
}
