import { Crown, Eye, MessageCircle, Send, Sparkles } from "lucide-react";

export function RoyalChat() {
  return (
    <aside className="hidden min-h-0 flex-col border-l border-white/6 bg-dashboard-chat lg:flex">
      <header className="flex h-11 shrink-0 items-center justify-between border-b border-white/6 px-3">
        <h2 className="text-xs font-semibold text-white">Royal Chat</h2>
        <span className="flex items-center gap-1 text-[10px] text-text-muted">
          <Eye className="h-3 w-3" />0
        </span>
      </header>

      {/* <div className="flex shrink-0 items-center justify-between px-3 py-2.5">
        <span className="text-[10px] text-text-muted">Chat members</span>
        <div className="flex -space-x-1.5">
          {["M", "A", "K", "N"].map((initial, index) => (
            <span
              key={initial}
              className={`grid h-5 w-5 place-items-center rounded-full border-2 border-dashboard-chat bg-linear-to-br ${
                index % 2 === 0
                  ? "from-accent-cyan to-accent-violet"
                  : "from-accent-gold to-accent-pink"
              } text-[9px] font-bold text-white`}
            >
              {initial}
            </span>
          ))}
          <span className="ml-2 self-center text-[10px] text-text-muted">
            +86
          </span>
        </div>
      </div> */}

      <div className="mx-2 mb-2 flex shrink-0 items-center gap-2 overflow-hidden rounded-lg border border-accent-violet/40 bg-linear-to-r from-dashboard-vip-start to-dashboard-vip-end p-2.5 shadow-glow">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-gold/15 text-accent-gold">
          <Crown className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-white">VIP Subscription</p>
          <p className="mt-0.5 text-[9px] leading-relaxed text-white/70">
            Get more chances to win royal rewards.
          </p>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-5 pb-2 text-center">
        <div className="relative mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-accent-violet/25 bg-accent-violet/10 text-accent-cyan">
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          <Sparkles
            aria-hidden="true"
            className="absolute -right-1 -top-1 h-3.5 w-3.5 text-accent-gold"
          />
        </div>
        <p className="text-xs font-semibold text-text-secondary">
          The royal chat is quiet
        </p>
        <p className="mt-1.5 max-w-48 text-[10px] leading-relaxed text-text-muted">
          No messages just yet. Check back later to join the conversation.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 border-t border-white/6 p-2">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Write a message</span>
          <input
            type="text"
            placeholder="Read-only chat"
            disabled
            className="h-8 w-full rounded-lg border border-white/[0.07] bg-dashboard-card px-2 text-[10px] text-text-muted placeholder:text-text-muted disabled:cursor-not-allowed"
          />
        </label>
        <button
          type="button"
          aria-label="Chat is read only"
          disabled
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-violet/60 text-white/60 disabled:cursor-not-allowed"
        >
          <Send className="h-3 w-3" />
        </button>
      </div>
    </aside>
  );
}
