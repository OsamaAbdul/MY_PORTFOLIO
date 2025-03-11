import Avatar from '../images/logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Avatar} alt="Avatar" />
      </div>
      <nav className="nav">
        <ul>
          <li>Download Resume</li>
          <li>
            
          <a href="/osama_resume.pdf" download>
              <button className="btn">
                <svg className="svg-icon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="tooltip"></span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;