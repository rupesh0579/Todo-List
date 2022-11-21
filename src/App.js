import React from 'react'
import Header from './Component/header';
import Form from './Component/form';

const App = () => {

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App;