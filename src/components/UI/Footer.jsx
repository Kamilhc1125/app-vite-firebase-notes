const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content p-4 mt-auto flex justify-center items-center">
      <p className="text-center">
        © {new Date().getFullYear()} - Kamil Małaszewicz - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;