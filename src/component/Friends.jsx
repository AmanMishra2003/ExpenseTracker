function Friends({friendData,selectSplitBillPerson}) {
    return (
        <li>
            <img src={friendData.image} alt="" />
            <h3>{friendData.name}</h3>
                {
                    (friendData.balance===0)?
                    <p>You and {friendData.name} are even</p>:
                    (
                        friendData.balance<0?
                        <p className="red">You owe {friendData.name} {Math.abs(friendData.balance)}€</p>:
                        <p className="green">{friendData.name} owes you {Math.abs(friendData.balance)}€</p>
                    )
                }
            <button className="button" onClick={()=>{selectSplitBillPerson(friendData.id)}}>Select</button>
        </li>
    )
}

export default Friends
