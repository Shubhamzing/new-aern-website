import logo from '../assets/media/logo.svg';
import { useNavigate } from 'react-router';


export default function Header() {
    let navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <div class="header-container">
            <nav class="main-nav">
                <img src={logo} className="logo" />
                <ul class="nav">
                    <li><a>Home</a></li>
                    {/* <li><a>Terms</a></li> */}
                    <li onClick={() => navigateTo('privacy-policy')}><a>Privacy Policy</a></li>
                </ul>
            </nav>
        </div>
    );
}