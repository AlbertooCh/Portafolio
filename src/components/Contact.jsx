import { useState } from "react";
import SectionTitle from "./SectionTitle";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact({ content, isDark }) {
  const { contactSection, contactLinks, personalInfo } = content;

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const inputClass = isDark
    ? "w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
    : "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500";

  const labelClass = isDark
    ? "mb-2 block text-sm font-medium text-slate-300"
    : "mb-2 block text-sm font-medium text-slate-700";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!personalInfo.formEndpoint || personalInfo.formEndpoint.includes("TU_FORM_ID")) {
      setStatus("error");
      setFeedback(
        "Falta configurar el endpoint de Formspree en src/data/portfolio.js."
      );
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(personalInfo.formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setFeedback(contactSection.formSuccess);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(contactSection.formError);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div
        className={
          isDark
            ? "rounded-3xl border border-blue-400/20 bg-blue-400/[0.06] p-7 md:p-10"
            : "rounded-3xl border border-blue-200 bg-blue-50 p-7 md:p-10"
        }
      >
        <SectionTitle
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          description={contactSection.description}
          isDark={isDark}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={
                    isDark
                      ? "rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-blue-300/40 hover:bg-slate-900"
                      : "rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                  }
                >
                  <p
                    className={
                      isDark ? "text-sm text-slate-400" : "text-sm text-slate-500"
                    }
                  >
                    {link.label}
                  </p>
                  <p
                    className={
                      isDark
                        ? "mt-2 break-words font-semibold text-white"
                        : "mt-2 break-words font-semibold text-slate-950"
                    }
                  >
                    {link.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                {contactSection.sendEmail}
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={
                  isDark
                    ? "rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                    : "rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                }
              >
                {contactSection.viewGithub}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={
              isDark
                ? "rounded-3xl border border-white/10 bg-slate-950/60 p-5 md:p-6"
                : "rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:p-6"
            }
          >
            <input type="hidden" name="_subject" value={form.subject} />

            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {contactSection.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Alberto"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  {contactSection.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  {contactSection.formSubject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  className={inputClass}
                  placeholder="Oferta junior backend"
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {contactSection.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Escribe aquí tu mensaje..."
                />
              </div>

              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              {feedback && (
                <p
                  className={
                    status === "success"
                      ? "rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-500"
                      : "rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-500"
                  }
                >
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? contactSection.formSending
                  : contactSection.formSubmit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}