import './App.css';
import Child from './components/child';
import { TransactionProvider } from './components/transactionContext';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <Child />
      </TransactionProvider>
    </div>
  );
}

export default App;
