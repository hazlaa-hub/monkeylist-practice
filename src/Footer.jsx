

const Footer = () => {
  const today = new Date();


  return (
    <footer style={{ backgroundColor: '#282c34', padding: '15px', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <p>Monkey App &copy; {today.getFullYear()}</p>
    </footer>
  );
};


export default Footer;
