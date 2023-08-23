import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      style={{ marginBottom: 20 }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        </ul>
      </div>
    </nav>
  );
}
