import logo from "../assets/logo.svg"
const Nav = () => {
    return(
        <nav style={navStyles}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul style={ulStyles}>
                <li><a href="#" style={aStyles}>About</a></li>
                <li><a href="#" style={aStyles}>Services</a></li>
                <li><a href="#" style={aStyles}>Projects</a></li>
                <li><button className="heading_1" type="submit" style={buttonStyles}>Contact</button></li>
            </ul>
        </nav>
    )
}

const navStyles ={
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    justifySelf:'center',
    paddingTop:'16px',
}

const ulStyles = {
    display: 'flex',
    gap:'2.5em',
    alignItems: 'center'
}

const aStyles = {
    color: 'var(--White)'
}

const buttonStyles = {
    border:'none',
    background: 'var(--White)',
    color:'var(--Grey_950)',
    borderRadius:'50px',
    padding: "15px 20px",
    textTransform: 'uppercase',
}

export default Nav