"use client";

import { ArrowRight, DollarSign, Lock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";

export function FormsInteractionsSection() {
  return (
    <section id="forms-interactions" className="mb-20 GlassCard padding-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-h2 font-bold mb-1">09. Forms & Interactions</h3>
          <p className="text-text-secondary text-sm">
            Clean, simple and intuitive form elements.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard padding="md">
          <h4 className="text-section font-bold mb-4">Create Your Account</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block text-caption font-medium text-text-secondary mb-1"
              >
                <Mail className="w-3 h-3 inline mr-1.5 text-accent-cyan" />{" "}
                Email address
              </label>
              <Input id="email" placeholder="you@example.com" type="email" />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-caption font-medium text-text-secondary mb-1"
              >
                <Lock className="w-3 h-3 inline mr-1.5 text-accent-cyan" />{" "}
                Password
              </label>
              <Input id="password" placeholder="••••••••" type="password" />
            </div>
            <div className="flex items-start gap-2">
              <input
                id="tos"
                type="checkbox"
                className="mt-0.5 rounded border-border bg-surface text-accent-violet focus:ring-accent-cyan"
              />
              <label
                htmlFor="tos"
                className="text-caption text-text-secondary leading-relaxed"
              >
                I agree to the{" "}
                <span className="text-accent-cyan hover:underline">
                  Terms of Service
                </span>
              </label>
            </div>
            <Button variant="primary" className="w-full">
              <ArrowRight className="w-4 h-4 inline mr-2" /> Create Account
            </Button>
            <p className="text-micro text-text-muted text-center">
              Already have an account?{" "}
              <span className="text-accent-cyan hover:underline">Sign in</span>
            </p>
          </form>
        </GlassCard>

        <GlassCard padding="md">
          <h4 className="text-section font-bold mb-4">Token Swap</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-accent-cyan bg-surface flex items-center justify-center">
                  <span className="text-[9px] text-accent-cyan">ETH</span>
                </div>
                <span className="text-caption font-medium text-text-primary">
                  From
                </span>
              </div>
              <span className="text-text-muted text-sm">- $2,564.52</span>
            </div>
            <div className="w-full h-8 rounded-lg border border-border bg-surface/50 flex items-center px-2 text-text-muted">
              <Send className="w-4 h-4 text-accent-violet" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-accent-green bg-surface flex items-center justify-center">
                  <span className="text-[9px] text-accent-green">USDT</span>
                </div>
                <span className="text-caption font-medium text-text-primary">
                  To
                </span>
              </div>
              <span className="text-text-muted text-sm">2,551.32</span>
            </div>
            <div className="w-full h-8 rounded-lg border border-border bg-surface/50 flex items-center px-2 text-text-muted">
              <span className="text-[10px] text-text-muted">
                Rate 1 ETH = 2,551.32 USDT
              </span>
            </div>
            <Button variant="primary" className="w-full mt-2">
              <DollarSign className="w-4 h-4 inline mr-2" /> Swap
            </Button>
            <p className="text-micro text-text-muted text-center">
              Gap Fee <span className="text-text-primary">- $3.24</span>
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
