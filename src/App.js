import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/Navbar/LoginModal/LoginModal';

import './App.scss'
import MainState from './context/MainState'

function App() {

    return (
		<div>
				<MainState>
					<Navbar/>
					<LoginModal/>
				</MainState>
		</div>
    );
}

export default App;
