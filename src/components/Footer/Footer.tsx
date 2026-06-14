const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="theme-footer border-t-2 border-emerald-300/30 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 pt-4 text-sm text-slate-400">
        <a
          href="mailto:tyynh.hiroki@gmail.com?subject=From%20your%20portfolio"
          className="theme-footer-link transition hover:text-emerald-200"
        >
          tyynh.hiroki@gmail.com
        </a>
        <p>&copy; {year} Hiroki Inoue. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
