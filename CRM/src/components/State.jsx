import {useState} from 'react'

const State = () =>{
    const [Name, setName]=useState("");
    const [Email, setEmail]=useState("");


  return (
    <div>
        <div>
            Name:
            <input
            type='text'
            placeholder='Enter your name'
            value={Name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <div>
        Name: {Name}
        </div>

        <div>
            <div>
                Email:
                <input
                type="email"
                placeholder='Enter you email' 
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                Email: {Email}
            </div>
        </div>

        {
  (Name && Email.trim()) ? (
    <button onClick={() => { setName(""); setEmail(""); }}>
      Reset
    </button>
  ) : (
    <button disabled>Reset</button>
  )
}
        
        
    </div>
  )
};

export default State;
