import Friends from "./Friends"

function FriendList({friends,selectSplitBillPerson,splitBillPerson}) {
    return (

            <ul>
                {
                    friends.map((ele)=>{
                        return <Friends friendData={ele} key={ele.id} selectSplitBillPerson={selectSplitBillPerson} splitBillPerson={splitBillPerson} />
                    })
                }

            </ul>

    )
}

export default FriendList
