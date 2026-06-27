"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "./actions";
import { services } from "@/lib/data";

const initialState: QuoteState = { status: "idle", message: "" };

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-400">{msg}</p>;
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(
    submitQuote,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-gold/40 bg-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-xl font-bold text-black">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-gold">Request Received</h3>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};
  const inputClass =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "error" && (
        <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.message}
        </p>
      )}

      {/* Honeypot (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="(000) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={inputClass}
          placeholder="you@example.com"
        />
        <FieldError msg={errors.email} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
            Service needed
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          <FieldError msg={errors.service} />
        </div>
        <div>
          <label htmlFor="material" className="mb-1.5 block text-sm font-medium">
            Material type
          </label>
          <input
            id="material"
            name="material"
            type="text"
            className={inputClass}
            placeholder="e.g. Aluminum, Mild Steel"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-medium">
            Job location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className={inputClass}
            placeholder="City / address"
          />
        </div>
        <div>
          <label
            htmlFor="completion"
            className="mb-1.5 block text-sm font-medium"
          >
            Desired completion date
          </label>
          <input
            id="completion"
            name="completion"
            type="date"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="measurements"
          className="mb-1.5 block text-sm font-medium"
        >
          Measurements / dimensions
        </label>
        <input
          id="measurements"
          name="measurements"
          type="text"
          className={inputClass}
          placeholder="e.g. 4ft x 2ft frame, 1/4 inch plate"
        />
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-medium">
          Project details <span className="text-gold">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className={inputClass}
          placeholder="Describe the work you need done."
        />
        <FieldError msg={errors.details} />
      </div>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          name="mobile"
          className="h-4 w-4 rounded border-border bg-black accent-[var(--gold)]"
        />
        Mobile (on-site) service required
      </label>

      <p className="text-xs text-muted">
        Have photos of the project? Email them to us and we&apos;ll get you a
        more accurate estimate.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-gold px-6 py-3.5 font-semibold text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request Free Estimate"}
      </button>
    </form>
  );
}
