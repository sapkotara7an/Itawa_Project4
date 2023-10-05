const DrawingRoom = () => {
    return (
        <>
        <div className='row features'>
            <div className='col-lg-6'><h2>Drawing Room</h2>
            <p>Itawa Developers, established under the flagship <br/>of Real Estate, bring to you a project of dreams</p>
            <ul>
                <li>External - Texture Paint</li>
                <li>Internal - POP Finished Walls & Plastic Emulsion Paint.</li>
                <li>Lift Cladding - Granite/Marble</li>
                <li>External - Texture Paint</li>
                
            </ul>
            
            </div>
            <div className='col-lg-6 drawing'><img src={require('../src/img/drawing.jpg')}className='w-100' /></div>
        </div>
        </>
    )
}

export default DrawingRoom;