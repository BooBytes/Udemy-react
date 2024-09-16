import sales from "../assets/images/sale.jpg"

function Categories() 
{
    return (

        <>
            <div className="categories">
                <p>Development</p>
                <p>Business</p>
                <p>IT & Software</p>
                <p>Personal Development</p>
                <p>Design</p>
                <p>Marketing</p>
            </div>

            <div className="sale-image">
                <img src={sales} alt="sale image"></img>
                <div className="sale-image__offer">
                    <h2>Udemy Flash Sale 24 hours to save!</h2>
                    <p>Get top courses just for 499. Just one day to save but a lifetime to learn</p>
                </div>
            </div>
        </>     

    )
}

   export default Categories




