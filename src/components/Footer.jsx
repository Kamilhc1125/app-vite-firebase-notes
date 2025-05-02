const Footer = () => {

  return (
    <footer className="footer sm:footer-horizontal bg-primary text-primary-content items-center p-4 mt-auto">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - Kamil Małaszewicz - All right reserved</p>
      </aside>
    </footer>
  )
}

export default Footer;
