import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react'
import UserInfoService from '../services/UserInfoService';

class UserInfoComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userinfo:[]
        }
    }

    componentDidMount(){
        UserInfoService.getAllUsers().then((response) => {
            this.setState({userinfo: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className = "text-center"> Gamers List </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Gamer Name</td>
                            <td> Gamer Nick Name</td>
                            <td> Region</td>
                            <td> Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userinfo.map(
                                user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.userName}</td>
                                    <td> {user.userNickName}</td>
                                    <td> {user.region}</td>
                                    <td> {user.emailId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserInfoComponent