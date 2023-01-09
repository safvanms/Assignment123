import './App.css';
import Contacts from './components/Contacts/Contacts';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Languages from './components/Languages/Languages';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';

function App() {
	return (
		<div className='app'>
			<div className='container '>
				<div className='left'>
					<Main />
					<Skills />
					<Contacts />
				</div>
				<div className='right'>
					<Education />
					<Languages />
					<Experience />
				</div>
			</div>
		</div>
	)
}

export default App;
