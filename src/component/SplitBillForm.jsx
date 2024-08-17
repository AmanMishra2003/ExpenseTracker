import { useState } from "react";
import Button from "./Button";
function SplitBillForm({person,updateBalance}) {
    const [formData, setFormData] = useState({bill:null,expense:null, billpayment:''})
    const friendExpense = formData.bill - formData.expense;


    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
      
        setFormData(currData=>(
            {
                ...currData,
                [name]:value
            }
        ))
    }

    const handleSubmission = (e)=>{
        e.preventDefault();
        let bill ;
        if(formData.billpayment==='you'){
            bill = friendExpense
        }else{
            bill =  -formData.expense
        }
        console.log(bill)

        updateBalance(bill)
        setFormData({bill:0,expense:0, billpayment:''})
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmission} >
            <h2>Split A Bill With {person.name}</h2>
            <label htmlFor="Bill Value">💰Bill Value</label>
            <input type="number" name="bill" id="Bill Value" value={formData.bill}  onChange={handleChange}  />

            <label htmlFor="Your Expense">🧍🏻Your Expense</label>
            <input type="number" name="expense" id="Your Expense" value={formData.expense}  onChange={handleChange} />

            <label htmlFor={`${person.name}Expense`}>👭{person.name} Expense</label>
            <input type="number" name="friendExpense" id={`${person.name}Expense`} readOnly value={friendExpense} />

            <label htmlFor="whoispayingthebill">🤑Who Is Paying The Bill?</label>
            <select name="billpayment" id="whoispayingthebill" value={formData.billpayment} onChange={handleChange}>
                    <option value="you">You</option>
                    <option value={person.name}>{person.name}</option>
            </select>


            <Button type="submit"><span>Split Bill</span></Button>
        </form>
    )
}

export default SplitBillForm
