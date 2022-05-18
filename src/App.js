import './App.css';
import AddILists from './components/AddILists';
import ManageLists from './components/ManageLists';

function App() {
  return (
    <div className='container'>
      <AddILists />
      <ManageLists/>
    </div>
  );
}

export default App;
