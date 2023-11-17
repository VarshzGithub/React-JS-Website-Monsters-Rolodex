import { Component } from 'react';

import CardList from './Component/Card-list/CardList.component';
import Search from './Component/search/search.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:'',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>
    this.setState(
      ()=>
      {
      return {monsters:users};
    })
  );
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => {
      return { searchField };
    });
  };
  
  
  render(){

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;


    const filterMonster=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>
      <Search 
      className = 'monster-searchbox'
      onChangeHandler = {onSearchChange} 
      placeholder='search monster' 
      />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
  
}

export default App;
