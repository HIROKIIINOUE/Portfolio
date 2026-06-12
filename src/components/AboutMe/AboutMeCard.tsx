const historyItems = [
  {
    period: '2025 - Now',
    place: 'Canada',
    summary:
      'Learning web development in college while building my own product. I also joined a remote web application project and gained three months of practical team experience.',
  },
  {
    period: '2023 - 2025',
    place: 'Australia',
    summary:
      'Saved money for college in Canada while studying code independently. A senior engineer friend let me learn through exposure to a real project and a more practical workflow.',
  },
  {
    period: '2022 - 2023',
    place: 'Belgium',
    summary:
      'Started learning to code, found the process genuinely enjoyable, and began aiming to become an IT engineer. I also started learning French during this period.',
  },
  {
    period: 'Until 2022',
    place: 'Japan',
    summary:
      'Graduated from Waseda University with a bachelor degree in Human Sciences, then worked at an IT company in Japan as a sales representative for about one and a half years.',
  },
] as const

type AboutMeCardProps = {
  isVisible: boolean
}

const AboutMeCard = ({ isVisible }: AboutMeCardProps) => {
  return (
    <article
      data-visible={isVisible}
      className="card-sheen rounded-4xl border-2 border-emerald-300/30 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_30%),linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(6,78,59,0.52)_42%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] ring-1 ring-white/6 backdrop-blur-xl sm:p-8"
    >
      <div className="flex flex-col gap-8">
        <ul className="relative grid gap-4 before:absolute before:top-0 before:bottom-2 before:left-[1.05rem] before:w-0.5 before:bg-[linear-gradient(180deg,rgba(52,211,153,0.45)_0%,rgba(52,211,153,0.08)_100%)] sm:gap-5">
          {historyItems.map((item) => (
            <li key={`${item.place}-${item.period}`} className="relative pl-10">
              <span className="absolute top-5 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/35 bg-[linear-gradient(145deg,rgba(6,95,70,0.95)_0%,rgba(5,150,105,0.78)_100%)] text-[0.65rem] font-semibold tracking-[0.18em] text-emerald-50 shadow-[0_10px_22px_rgba(4,120,87,0.24)]">
                {item.place.slice(0, 2).toUpperCase()}
              </span>

              <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.025)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-emerald-300/28 hover:bg-emerald-400/5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.24em] text-emerald-200/78 uppercase">
                      {item.place}
                    </p>
                    <h4 className="mt-2 text-xl font-semibold text-white">
                      {item.period}
                    </h4>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-[0.95rem]">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default AboutMeCard
