import { Form } from "react-bootstrap";


const Contact =() => {
  const handleSubmit=(e) => {
    alert('Form Submitted Succefully')
    Form.style.display = 'none';   
    e.preventDefault();
    
    }
    return (
        <>
        <div className="row">
        <div className='col-lg-12 col-md-12 col-sm-12 my-2 text-center py-5' style={{justifyContent:'center'}}>
  <div className='get_intouch_form '>

  <Form onSubmit={handleSubmit}>
  <div className='get_intouch py-3'>
    
<h1>Get In Touch With Us</h1>
<p >Sampl Flat is Ready For You</p>
</div>
<div className='py-4 '>
<input typeof='text'placeholder='Enter name'/><br/>
<input typeof='email'placeholder='Enter email' /><br/>
<input typeof='number'placeholder='Enter mobile' /><br/>


<textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Enter message here.."></textarea><br/>
<button  className='btn' type="submit" value="submit">Submit</button>
</div>
</Form>
</div>

</div>
</div>
        </>
    )
}

export default Contact;