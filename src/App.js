import './App.css';
import uploadLogo from './upload.png';

function App() {
	return (
		<div className='wrapper'>
			<form>
				<h1>React drop files input</h1>
				<div className='drugDrop'>
					<img src={uploadLogo} className='uploadLogo' alt='logo' />
					<h2>Drag and drop your files here</h2>
				</div>

				<p>Ready to upload</p>
				<label>
					<span>Upload your files</span>
					<input type='files' className='input' multiple={true} />
				</label>
			</form>
		</div>
	);
}

export default App;
