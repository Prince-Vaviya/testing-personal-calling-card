const linkedinUrl = 'https://linkedin.com/in/prince-vaviya'

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f8ed] px-6 py-12 text-[#1d2b13]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#e4f2bd] blur-3xl" />
        <div className="absolute -bottom-44 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#d9eea8] blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 border-t border-[#d8e4d5]" />
      </div>

      <article className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#c8d99b] bg-[#fbfdf9]/90 shadow-[0_24px_80px_rgba(28,65,43,0.12)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-[#dfe9bd] px-6 py-5 sm:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#48765a]">PV</span>
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#648170]">
            <span className="h-2 w-2 rounded-full bg-[#4e9b63] shadow-[0_0_0_4px_#e4f0e1]" />
            Available to connect
          </span>
        </div>

        <div className="px-6 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-14">
          <div className="mb-14 flex items-start justify-between gap-6">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#5d8068]">Personal calling card</p>
              <h1 className="max-w-lg text-5xl font-semibold tracking-[-0.06em] text-[#365314] sm:text-7xl">Great developer</h1>
            </div>
            <span aria-hidden="true" className="mt-2 text-3xl font-light text-[#80a88a]">→</span>
          </div>

          <div className="grid gap-10 border-t border-[#dfe9bd] pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8a74]">What I do</p>
              <p className="max-w-sm text-2xl leading-tight tracking-[-0.03em] text-[#294a35] sm:text-3xl">AI Engineer &amp; Full-Stack Developer</p>
            </div>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-[#65a30d] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4d7c0f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f5837] sm:self-end"
            >
              <span>Connect on LinkedIn</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#dfe9bd] px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span className="text-[#76917c]">How to reach me</span>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="font-medium text-[#4d7c0f] underline decoration-[#a6c4ab] underline-offset-4 hover:text-[#17452b]">
            linkedin.com/in/prince-vaviya
          </a>
        </div>
      </article>
    </main>
  )
}

