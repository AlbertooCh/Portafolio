import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { GithubIcon, MailIcon } from "./Icons";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition outline-none placeholder:text-slate-400 focus:border-accent-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-accent-400";

const labelClass =
  "mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300";

export default function Contact({ content }) {
  const { contactSection, contactLinks, personalInfo } = content;

  const placeholders = contactSection.placeholders;

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  // El endpoint puede sobrescribirse por entorno sin tocar el código.
  const formEndpoint =
    import.meta.env.VITE_FORM_ENDPOINT || personalInfo.formEndpoint;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));

    if (status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;

    if (!formEndpoint || formEndpoint.includes("TU_FORM_ID")) {
      setStatus("error");
      setFeedback(contactSection.formConfigError);
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formElement),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setStatus("success");
      setFeedback(contactSection.formSuccess);
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback(contactSection.formError);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="rounded-3xl border border-accent-200 bg-accent-50 p-7 md:p-10 dark:border-accent-400/20 dark:bg-accent-400/[0.06]">
        <SectionTitle
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          description={contactSection.description}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <ul className="grid gap-4">
              {contactLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="block rounded-2xl border border-accent-100 bg-white p-5 shadow-sm transition hover:border-accent-300 hover:shadow-md dark:border-white/10 dark:bg-slate-950/60 dark:shadow-none dark:hover:border-accent-300/40 dark:hover:bg-slate-900"
                    >
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {link.label}
                      </span>
                      <span className="mt-2 block break-words font-semibold text-slate-950 dark:text-white">
                        {link.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                <MailIcon className="h-4 w-4" />
                {contactSection.sendEmail}
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <GithubIcon className="h-4 w-4" />
                {contactSection.viewGithub}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-accent-100 bg-white p-5 shadow-sm md:p-6 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-none"
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
                  placeholder={placeholders.name}
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
                  placeholder={placeholders.email}
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
                  placeholder={placeholders.subject}
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
                  placeholder={placeholders.message}
                />
              </div>

              {/* Trampa antispam: los bots la rellenan, las personas no la ven. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <p
                role="status"
                aria-live="polite"
                className={
                  feedback
                    ? status === "success"
                      ? "rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                      : "rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                    : "sr-only"
                }
              >
                {feedback}
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
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
