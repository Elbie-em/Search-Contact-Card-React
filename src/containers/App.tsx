import React from 'react';
import SearchContactCard from '../components/SearchContactCard';
import getExampleData from '../staticData/exampleData';
import '../styles/App.css';

const App = () => {
  const {fullName,profileImageUrl,trust} = getExampleData();
  return (
    <>
    <div>
      <SearchContactCard name={fullName} imgUrl={profileImageUrl} score={trust}/>
    </div>
    </>
  );
}

export default App;
