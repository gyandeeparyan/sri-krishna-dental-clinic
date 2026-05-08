export function CodeWindow({
  title,
  tabs = [],
  activeTab = 0,
  lines = [],
  footer,
}) {
  return (
    <div className="code-window">
      <div className="flex items-center justify-between gap-4 border-b border-(--divider-soft) pb-4">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-(--accent-red)" />
          <span className="size-2.5 rounded-full bg-(--accent-yellow)" />
          <span className="size-2.5 rounded-full bg-(--accent-green)" />
        </div>
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-(--ash)">{title}</p>
      </div>

      {tabs.length ? (
        <div className="mt-4 flex flex-wrap gap-2 border-b border-(--divider-soft) pb-4">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={index === activeTab ? "code-tab code-tab-active" : "code-tab"}
            >
              {tab}
            </span>
          ))}
        </div>
      ) : null}

      <pre className="mt-4 overflow-x-auto font-code text-[13px] leading-7 text-(--body-text)">
        <code>
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </code>
      </pre>

      {footer ? (
        <div className="mt-4 border-t border-(--divider-soft) pt-4 font-ui text-sm text-(--charcoal)">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
