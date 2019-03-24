import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import UserList from './components/UserList';
import { isLoading, getUserData, userDataFilter } from './actions/index';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isUserId: '', isUserName: '',
      localUserData: [],isLoading:false
    }
  }
  
  componentDidMount(){
    this.handleFetchDadta(); 
  }

  handleFetchDadta = () => {
    this.setState({isLoading:true})
    fetch('https://reqres.in/api/users?page=2')
    .then( response => {
      return response.json()
    }).then( res => {
      this.setState({ localUserData: res }, () => this.props.getUserDataList(res))
      this.setState({isLoading:false})
    })
    .catch( (err) => {
      console.log('err',err);
    })
  }

  handleUserId = (event) => {
    this.setState({ isUserId: event.target.value });
  }

  handleUserName = (event) => {
    this.setState({ isUserName: event.target.value });
  }
  handleRest = () => {
    this.setState({ filteredUser: [] });
  }

  handleFilter = () => {
    const { isUserId, isUserName,localUserData } = this.state;
    let formatedUserId = parseInt(isUserId);
    let filteredUser = localUserData.data.filter(user =>  ((user.id === formatedUserId)) );
    this.setState({ filteredUser })
  }

  render() {
    const { localUserData,filteredUser,isLoading } = this.state;
    const isFilteredUser = filteredUser && filteredUser.length === 1;
    const FinalUserData = isFilteredUser ? filteredUser : localUserData.data;
    const UserData = localUserData && localUserData.data;

    if (isLoading) {
      return <div className="App">
        <div className="App-header"><div>Loading ...</div>
          </div></div>
    }
    return (
      <div className="App">
        <div className="App-header">
          
          <div>
      
            <label>Employee ID</label>
            <select onChange={this.handleUserId} >   
              {UserData && UserData.map( (user) => {
                return <option key={user.id}>{user.id}</option>
              })}
            </select>
          
            <label>Employee Name</label>
            <select onChange={this.handleUserName}>   
            {UserData && UserData.map( (user) => {
                return <option key={user.id} value={user.first_name}>{user.first_name + ' ' + user.last_name}</option>
              })}
            </select>

            <button type="button" onClick={this.handleFilter}>Filter</button>
            <button type="button" onClick={this.handleRest}>Reset</button>
          
          </div>

          <div>
            <ul className="user-list">
                <UserList userList={FinalUserData} />
            </ul>
          </div>

         
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('map',state)
  return {
   userList: state && state.userData ? state.userData.data : []
 } 
}

const mapDispatchToProps = dispatch => {
  return {
    isLoading: () => dispatch(isLoading()),
    getUserDataList: (data) => dispatch(getUserData(data)),
    userDataFilter: (data) => dispatch(userDataFilter(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


