import FriendList from "./FriendList"
import initialFriends from "../assets/data"
import Form from "./Form"
import SplitBillForm from "./SplitBillForm"
import Button from "./Button"

import { useState } from "react"

function AppComponent() {
    const randNum = Math.floor(Math.random()*100000)+10000
    const [data, setData] = useState(initialFriends)
    const [showForm, setShowForm] = useState(false)
    const [splitBillPerson, setSplitBillPerson] = useState({})
    const [openSplitBillForm, setOpenSplitBillForm] = useState(false)

   
    const showFormEventFunction = ()=>{
        setShowForm(!showForm)
    }


    const selectSplitBillPerson = (id)=>{
        setSplitBillPerson(...data.filter(ele=> ele.id===id))
        setOpenSplitBillForm(true)
    }


    const AddFriend = (data)=>{
        setData(currData=>(
            [
                ...currData,
                {
                    ...data, balance:0, id:randNum
                }
            ]
        ))
        setShowForm(!showForm)
    }

    const updateBalance = (bal)=>{
        console.log(bal)
        setData(currData=>(
            currData.map(ele=>{
                if(ele.id===splitBillPerson.id){
                    return {
                        ...ele,
                        balance :ele.balance+bal
                    }
                }else{
                    return ele
                }
            })
        ))
        setOpenSplitBillForm(false)
    }

    return (
        <div className="app">
            <div className="sidebar">
            <FriendList friends={data} selectSplitBillPerson={selectSplitBillPerson}/>
            {
                showForm
                &&
                <Form id={randNum} AddFriend={AddFriend}  />
            }
            <Button clickEvent={showFormEventFunction}>{ showForm ? <span>Close</span> : <span>Add Friend</span>}</Button>
            </div>
            {
                (openSplitBillForm)
                &&
                <div className="sidebar">
                    <SplitBillForm person={splitBillPerson} updateBalance={updateBalance} />
                </div>
            }
        </div>
    )
}

export default AppComponent
