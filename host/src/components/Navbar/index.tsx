import Link from "next/link";
import { useRouter } from "next/router";
import i18nService from "i18next-shared-lib/lib/i18nService";

export default function Navbar() {
  const router = useRouter()
  
  const onToggleLanguageClick = (newLocale: string) => {
    //const { pathname, asPath, query } = router
    //router.push({ pathname, query }, asPath, { locale: newLocale })
    i18nService.switchLanguage(newLocale);
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      style={{ marginBottom: 20 }}
      data-bs-theme="dark"
    >
      <div style={{ flex: 1, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between"}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sellers" className="nav-link">
              Sellers
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
        <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", width: "180px" }}>
          <button onClick={() => onToggleLanguageClick('en')} className="btn btn-sm">EN</button>
          <button onClick={() => onToggleLanguageClick('es')} className="btn btn-sm">ES</button>     
          <button onClick={() => onToggleLanguageClick('pt')} className="btn btn-sm">PT</button>
        </div>
      </div>
    </nav>
  );
}
