import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names=["apple","orange","pineapple"];
        const int=Math.floor(Math.random()*3);
        return names[int];
    }
    const HandleClick=(name)=>{
      console.log(`thank you  ${name}`)
    }
  return (
    <main>
      <p>{handleNameChange()} cake</p>
      <button onClick={()=>HandleClick("charle")}>Subscribe</button>
    </main>
  )
}

export default Content