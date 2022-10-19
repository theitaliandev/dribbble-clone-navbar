import {Navbar} from './components'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <Navbar />
      <div style={{
        background: '#f3f3f4',
        flexGrow: 1
      }}/>
    </div>
  );
}

export default App;
