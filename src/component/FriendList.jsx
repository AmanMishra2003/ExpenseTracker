import Friends from "./Friends"

function FriendList({friends,selectSplitBillPerson}) {
    return (

            <ul>
                {
                    friends.map((ele)=>{
                        return <Friends friendData={ele} key={ele.id} selectSplitBillPerson={selectSplitBillPerson} />
                    })
                }

            </ul>

    )
}

export default FriendList
