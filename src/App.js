import '../src/tailwind.css';

import BasicForm from './components/BasicForm';

function App() {
    return (
        <div className='p-3 text-center'>
            <h1 className='text-center text-gray-500'>React Hook Form</h1>
            <BasicForm />
        </div>
    );
}

export default App;
