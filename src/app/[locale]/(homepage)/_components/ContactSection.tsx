// ContactSection.tsx
'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <div className="mx-auto w-[92%] max-w-[1100px] rounded-[28px] bg-white/70 dark:bg-[#0B1A3E] backdrop-blur px-6 sm:px-10 py-10 border-[5px] border-[#F4F9FF] dark:border-[#102047] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="text-left flex flex-col justify-around h-full">
          <h2 className="text-[34px] leading-[1.1] font-semibold text-[#0B1A3E] dark:text-white">
            We’re here to<br/>help.
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-[#0B1A3E]/70 dark:text-white/70 max-w-[360px]">
            We’re happy to answer questions about features, security, or partnerships.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#0B1A3E] dark:text-white/80">
              Your name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full h-10 rounded-md border border-[#0B1A3E]/10 dark:border-white/10 bg-white dark:bg-transparent px-3 text-[14px] outline-none focus:ring-2 focus:ring-[#9CE818]/60"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#0B1A3E] dark:text-white/80">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full h-10 rounded-md border border-[#0B1A3E]/10 dark:border-white/10 bg-white dark:bg-transparent px-3 text-[14px] outline-none focus:ring-2 focus:ring-[#9CE818]/60"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#0B1A3E] dark:text-white/80">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="What's on your mind"
              className="w-full rounded-md border border-[#0B1A3E]/10 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#9CE818]/60"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-14 w-[189px] items-center justify-center rounded-md px-8 text-[14px] font-semibold text-[#0B1A3E] disabled:opacity-60"
            style={{ backgroundColor: '#9CE818' }}
          >
            {loading ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
