function Footer() {
  return (
    <>
      <footer className="pt-5 d-flex justify-content-between">
        <span>
          Copyright © {new Date().getFullYear()} <a href="#">Bi Games</a>
        </span>
        <ul className="nav m-0">
          <li className="nav-item">
            <a className="nav-link text-secondary" aria-current="page" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Terms and conditions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default Footer;
