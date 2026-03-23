import { BrowserRouter as Router, Routes, Route, useParams, Link, useLocation } from 'react-router-dom';
import NavMenu from './NavMenu';
import FileDetails from './filedetails.jsx';
import scpLogo from './images/scp.jpg';
import { files } from './data';

function HomeHeader() {
    return (
        <section className="home-section home-hero">
            <h1 className="home-heading">
                <img className="logo" src={scpLogo} alt="SCP logo" />
                <span>SCP Foundation Database</span>
            </h1>

            <p className="home-intro">
                Browse classified files, discover anomalies, and jump into the most notable SCP entries.
            </p>
        </section>
    );
}

function FeaturedFiles() {
    const featuredFiles = files.filter((file) => file.Image).slice(0, 3);

    return (
        <section className="home-section home-featured">
            <h2 className="featured-title">Featured Files</h2>

            <div className="featured-grid">
                {featuredFiles.map((file) => (
                    <article key={file.Subject} className="featured-card">
                        <img className="featured-card-image" src={file.Image} alt={file.Subject} />
                        <div className="featured-card-body">
                            <p className="featured-card-class">{file.Class}</p>
                            <h2>{file.Subject}</h2>
                            <p>{file.Description.slice(0, 120)}...</p>
                            <Link className="featured-card-link" to={`/${file.Subject}`}>
                                Open File
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function SCPFiles() {
    const { subject } = useParams();
    return <FileDetails Subject={subject} />;
}

function AppContent() {
    const { pathname } = useLocation();
    const isHomeRoute = pathname === '/';

    return (
        <>
            <HomeHeader />
            <NavMenu />
            {isHomeRoute && <FeaturedFiles />}

            <Routes>
                <Route path="/:subject" element={<SCPFiles />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
