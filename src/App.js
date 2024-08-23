import { useState } from 'react';
import './App.css';
// import Card from './components/Card';
import Cards from './components/shared/Cards';
import Header from './components/Header';
import FeedbackData from './FeedbackData';
import FeedBackList from './components/FeedBackList';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} />
        <Cards>Tis is me coming upm</Cards>

      </div>
      

    </>
  );
}

export default App;
