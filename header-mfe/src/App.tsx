import './App.css';
import RemoteHeader from 'shell/Header';
import RemoteFooter from 'shell/Footer';

const App = () => {
    return (
        <div className="content">
            <RemoteHeader />
            <h1>Rsbuild avec React</h1>
            <p>Micro Frontend avec Module Federation.</p>
            <RemoteFooter />
        </div>
    );
};

export default App;