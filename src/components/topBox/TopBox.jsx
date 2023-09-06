import "./TopBox.css"
import { topDealUsers } from "../../data.js"

export default () => {
    return (
        <div className="topbox">
            <h1>Top Box</h1>
            <div className="list">
                {topDealUsers.map(user => (
                    <div className="listItem" key={user.id} >
                        <div className="user">
                            <img src={user.img} alt=""  />
                            <div className="userText">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>

                        <span className="amount">{user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}