import { Link } from "react-router-dom";


const Bathroom = () => {
    return (
        <>
        
        <div className='specification'>
    <div className='container' >
        <div className='title text-center'>
        <h2 className='pt-4'>Property Specification</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
    
    <div className='property_specification py-5'>
        <div className='room_types mb-5'>

        <ul className=''>
            <li><Link to='/specification'>Drawing Room</Link></li>
            <li><Link to='/specification/kitchen'>Kitchen</Link></li>
            <li><Link to='/specification/bathroom'>Bathroom</Link></li>
            <li> <Link to='/specification/balcony'>Balcony</Link></li>
            <li>  <Link to='*'>Bedroom</Link></li>
            </ul>
        </div>
        <div className='row features'>
            <div className='col-lg-6'><h2>Bathroom</h2>
            <p>Itawa Developers, established under the flagship <br/>of Real Estate, bring to you a project of dreams</p>
            <ul>
                <li>External - Texture Paint</li>
                <li>Internal - POP Finished Walls & Plastic Emulsion Paint.</li>
                <li>Lift Cladding - Granite/Marble</li>
                <li>External - Texture Paint</li>
                
            </ul>
            
            </div>
            <div className='col-lg-6 drawing'><img src={require('../src/img/bathroom.jpg')}className='w-100' /></div>
        </div>
    </div>
    </div>
    </div>
        </>
    )
}

export default Bathroom;