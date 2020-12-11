import "./App.css";

function Footer() {
  return (
    <footer className="text-muted footer">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>© github/saechavarria</p>
        <p>
          New to Bootstrap?{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the homepage
          </a>{" "}
          or read our{" "}
          <a
            href="/docs/4.5/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            getting started guide
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
