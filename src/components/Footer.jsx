function Footer() {
    //getting full date
    const date = new Date();

    const year = date.getFullYear();
  return (
    <header className="header">
      <p>Developed By <span>Osama</span> Abdullahi Ibrahim. <br /> All Right Reserved, {year} </p>
    </header>
  );
}

export default Footer;