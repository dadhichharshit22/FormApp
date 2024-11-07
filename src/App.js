
import { useState } from 'react';
import './App.css';

function App() {

  const [formData,setFormData] = useState({firstName:"",lastName:"",email:""
    ,country:"India",streetAddress:"",city:"",state:"",zip:"",
  comments:false,candidates:false,offers:false,pushNotification:""});

  function changeHandler(event){
    const {name,value,checked,type} = event.target;

    setFormData((prev)=>({...prev,[name]:type==="checkbox"?checked:value}));
  }

   function submitHandler(event){
     event.preventDefault();

     console.log("Finally Printing the value of form data:");
     console.log(formData);
   }
  return (
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name </label>
        <br/>
       <input 
       type='text'
        name='firstName'
        id='firstName' 
        placeholder='Harshit'
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"/>

       <br/>
       <br/>
       <label htmlFor='lastName'>Last Name</label>
       <br/>
       <input 
       type='text'
       name='lastName'
       id='lastName'
       placeholder='Dadhich'
       value={formData.lastName}
       onChange={changeHandler}
       className='outline' ></input>
       <br/>
       <br/>

       <label htmlFor='email'>Email Address</label>
       <br/>
       <input
       type='email'
       name='email'
       id='email'
       placeholder='dadhich.harshit222002@gmail.com'
       value={formData.email}
       onChange={changeHandler}
       className='outline'
       />

       <br/>
       <br/>

       <label htmlFor='country'>Country</label>
       <br/>
       <select
       id='country'
       name='country'
       value={formData.country}
       onChange={changeHandler}
       className='outline'
       >
        <option>India</option>
        <option>Unitied State</option>
        <option>America</option>
        <option>Mexico</option>
       </select>

       <br/>
       <br/>
       <label htmlFor='streetAddress'>Street Address </label>
        <br/>
       <input 
       type='text'
        name='streetAddress'
        id='streetAddress' 
        placeholder='1234 Main st'
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"/>

       <br/>
       <br/>

       <label htmlFor='city'>City </label>
        <br/>
       <input 
       type='text'
        name='city'
        id='city' 
        placeholder='Asansol'
        value={formData.city}
        onChange={changeHandler}
        className="outline"/>

       <br/>
       <br/>

       <label htmlFor='state'>State / Province</label>
        <br/>
       <input 
       type='text'
        name='state'
        id='state' 
        placeholder='West Bengal'
        value={formData.state}
        onChange={changeHandler}
        className="outline"/>

       <br/>
       <br/>

       <label htmlFor='zip'>ZIP / Postal Code</label>
        <br/>
       <input 
       type='text'
        name='zip'
        id='zip' 
        placeholder='302015'
        value={formData.zip}
        onChange={changeHandler}
        className="outline"/>
  
       <br/>
       <br/>

       <fieldset>
        <legend>By Email</legend>
         
         <div className='flex'> 
         <input 
         type='checkbox'
         id="comments"
         name="comments"
         checked={formData.comments}
         onChange={changeHandler}
         />

         <div>
           <label htmlFor='comments'>Comments</label>
           <p>Get notified when someone posts a comments on posting</p>
         </div>
         </div>

         <br/>
         <div className='flex'> 
         <input 
         type='checkbox'
         id="candidates"
         name="candidates"
         checked={formData.candidates}
         onChange={changeHandler}
         />

         <div>
           <label htmlFor='candidates'>candidates</label>
           <p>Get notified when someone posts a comments on posting</p>
         </div>
         </div>

         <br/>
         
         <div className='flex'> 
         <input 
         type='checkbox'
         id="offers"
         name="offers"
         checked={formData.offers}
         onChange={changeHandler}
         />

         <div>
           <label htmlFor='offers'>offers</label>
           <p>Get notified when someone posts a comments on posting</p>
         </div>
         </div>
        

       </fieldset>
       <br/>
       <br/>
       <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile number.</p>

        <input
        type='radio'
        id="pushEverything"
        name="pushNotification"
        value="Everything"
        onChange={changeHandler}/>

        <label htmlFor='pushEverything'>Everything</label>
        <br/>
        <input
        type='radio'
        id="pushEmail"
        name="pushNotification"
        value="same as email"
        onChange={changeHandler}/>

        <label htmlFor='pushEmail'>Same as Email</label>
        <br/>
        <input
        type='radio'
        id="pushNothing"
        name="pushNotification"
        value="No push Notification"
        onChange={changeHandler}/>

        <label htmlFor='pushNothing'>No push Notification</label>
       </fieldset>

       <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
      </form>
    </div>
  );
}

export default App;
