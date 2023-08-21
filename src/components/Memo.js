import React, { useState } from 'react';


const Memo = () => {
   const [memo,setMemo] = useState([])
   const [skill,setSkill] = useState("")

   function addSkill(){
    if(skill.length > 5){
        setMemo([...memo,skill])
    }
   }

    return(<div>
      <input type='text' id='skill-input' value={skill} onChange={(e)=> setSkill(e.target.value)}/>
      <button id='skill-btn' onClick={addSkill}>Add Skill</button>
      {memo.map(item => {
        return (
            <ul>
                <li id= {'item-'+item}>{item}</li>
            </ul>
        )
      })}
    </div>

    )
}
export default Memo