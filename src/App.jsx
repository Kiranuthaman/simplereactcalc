import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year ,  setYear] = useState("")
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
  const [interest,setInterest] = useState(0)

  const validate = (e)=>{
    const {name,value} = e.target
    console.log(name);
    console.log(value);
    

    if (!! value.match('^[0-9]*$')) {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)

      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(true)
      }
  
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)

      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(false)
      }
  
      else{
        setYear(value)
        setIsYear(false)
      }
    } 
  }

  const handleReset = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const calculate = ()=>{
        setInterest((principle*rate*year)/100)
  }





  return (
    <>
     <div className='bg-dark d-flex justify-content-center align-items-center'style={{height:'100vh'}}>
      <div className='bg-light p-4 rounded-3'style={{width:'500px'}}>
        <h1>Simple Interest</h1>
        <p>Calculate your simple interest easily</p>
        <div className='bg-warning p-3 d-flex justify-content-center align-items-center rounded-3 mt-4 flex-column ' style={{height:'130px'}}>
          <h1>₹ {interest}</h1>
          <p>Total simple interest</p>
        </div>
        <div>
          <div className="my-3">
          <TextField id="outlined-basic" className='w-100' label="₹ Principle Amount" value={principle}  variant="outlined" name ='principle' onChange={(e)=>validate(e)} />
          </div>
          {isPrinciple==false&&<p className="text-danger">*Invalid Input</p>}
          <div className="my-3">
          <TextField id="outlined-basic" className='w-100' label="rate of Interest (%)" value={rate} variant="outlined"  name ='rate' onChange={(e)=>validate(e)} />
          </div>
          {isRate==false&&<p className="text-danger">*Invalid Input</p>}
          <div className="my-3">
          <TextField id="outlined-basic" className='w-100' label="Year" variant="outlined" value={year}  name ='year' onChange={(e)=>validate(e)} />
          </div>
          {isYear==false&&<p className="text-danger">*Invalid Input</p>}
          <div className="my-3 d-flex justify-content-between">
          <Button variant="contained" disabled = {isPrinciple && isRate && isYear? false:true} style={{width:'190px'}} className='p-3' color='success' onClick={calculate} >Calculate</Button>
          <Button variant="outlined" style={{width:'190px'}} className='p-3 ' onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
