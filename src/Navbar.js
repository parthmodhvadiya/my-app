const Navbar = () => {
    let link = 'https://www.google.com/';
    return (
        <div className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href={link}>New Blog</a>
            </div>
        </div>
     );
      
}
 
export default Navbar;