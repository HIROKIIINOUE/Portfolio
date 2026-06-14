import { useTranslation } from 'react-i18next'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

type AboutMeEntry = {
  code: string
  period: string
  place: string
  summary: string
}

const AboutMeCard = () => {
  const { t } = useTranslation('aboutMe')
  // returnObjects: true で翻訳データを配列として扱うことを明示
  const entries = t('entries', { returnObjects: true }) as AboutMeEntry[]
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>({
    threshold: 0,
    rootMargin: '0px 0px -20% 0px',
    minScrollY: 10,
  })

  return (
    <article
      ref={ref}
      data-visible={isVisible}
      className="theme-card reveal-on-scroll card-sheen rounded-4xl border-2 border-emerald-300/30 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_30%),linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(6,78,59,0.52)_42%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] ring-1 ring-white/6 backdrop-blur-xl sm:p-8"
    >
      <div className="flex flex-col gap-8">
        <ul className="relative grid gap-4 before:absolute before:top-0 before:bottom-2 before:left-[1.05rem] before:w-0.5 before:bg-[linear-gradient(180deg,rgba(52,211,153,0.45)_0%,rgba(52,211,153,0.08)_100%)] sm:gap-5">
          {entries.map((item) => (
            <li key={`${item.code}-${item.period}`} className="relative pl-10">
              <span className="theme-timeline-badge absolute top-5 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/35 bg-[linear-gradient(145deg,rgba(6,95,70,0.95)_0%,rgba(5,150,105,0.78)_100%)] text-[0.65rem] font-semibold tracking-[0.18em] text-emerald-50 shadow-[0_10px_22px_rgba(4,120,87,0.24)]">
                {item.code}
              </span>

              <div className="theme-card-inset rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.025)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-emerald-300/28 hover:bg-emerald-400/5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="theme-kicker text-xs font-semibold tracking-[0.24em] text-emerald-200/78 uppercase">
                      {item.place}
                    </p>
                    <h4 className="theme-heading mt-2 text-xl font-semibold text-white">
                      {item.period}
                    </h4>
                  </div>
                </div>

                <p className="theme-body mt-4 text-sm leading-7 text-slate-200 sm:text-[0.95rem]">
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
