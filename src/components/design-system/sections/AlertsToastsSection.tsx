"use client";

import { CheckCircle2, Info, Loader2, XCircle } from "lucide-react";

const alerts = [
  {
    color: "accent-green",
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Transaction Successful!",
    desc: "Your transfer was completed successfully.",
  },
  {
    color: "accent-gold",
    icon: <Loader2 className="w-5 h-5 animate-spin" />,
    title: "Pending Confirmation",
    desc: "Waiting for network confirmation...",
  },
  {
    color: "accent-pink",
    icon: <XCircle className="w-5 h-5" />,
    title: "Transaction Failed",
    desc: "Something went wrong. Please try again.",
  },
  {
    color: "accent-cyan",
    icon: <Info className="w-5 h-5" />,
    title: "Info",
    desc: "New version available. Refresh to get the latest features.",
  },
];

export function AlertsToastsSection() {
  return (
    <section id="alerts-toasts" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">08. Alerts & Toasts</h3>
          <p className="text-text-secondary text-sm">
            Keep users informed with clear, beautiful feedback.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className={`flex items-center gap-3 rounded-lg border border-${alert.color}/30 bg-${alert.color}/10 p-4 text-text-primary`}
          >
            <span className={`text-${alert.color}`}>{alert.icon}</span>
            <div>
              <p className="text-body font-semibold">{alert.title}</p>
              <p className="text-caption text-text-secondary">{alert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
