import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer({ content }) {
  const { personalInfo, footer } = content;
  const currentYear = new Date().getFullYear();

  const links = [
    { href: personalInfo.github, label: "GitHub", Icon: GithubIcon },
    { href: personalInfo.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: `mailto:${personalInfo.email}`, label: "Email", Icon: MailIcon },
  ];

  return (
    <footer className="border-t border-slate-200 px-5 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
        <p>
          © {currentYear} {personalInfo.name}. {footer.builtWith}
        </p>

        <ul className="flex items-center gap-2">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition hover:border-accent-300 hover:text-accent-600 dark:border-white/10 dark:hover:border-accent-400/40 dark:hover:text-accent-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
