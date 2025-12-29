function Footer() {
  //getting full date
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-6 text-center text-sm text-muted-foreground">
      <p>Developed By <span className="text-primary font-semibold">Osama</span> Abdullahi Ibrahim. <br /> All Right Reserved, {year} </p>
    </footer>
  );
}

export default Footer;