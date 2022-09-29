export function Home()
{
    return (
    <>
        <div className = "home-top-img">
            <div className = "home-content-on-img">
                <p>
                    Being a Barber is about taking care of people.
                </p>
            </div>
        </div>
        <div className = "home-shop-section">
            <h1>
                our shop
            </h1>
            <hr />
            <p>
                Steam Barbers specializes in classic cuts, beard trims and quality grooming products.
                Our professional and experienced barbers will give you the haircut you're looking for.
                We are not just a team of barbers, we're a community, we provide to our customers a relaxing environment
                for the best experience, with great music and friendly conversations with our customers, we make our community.
            </p>
        </div>
        <div className="home-shop-info-section">
            <div>
                <h1>
                    Hours
                </h1>
                
                <p>
                    Tues-Fri 9:00am-6:00pm
                    <br />
                    Sat 9:00am-3:00pm
                    <br />
                    Closed Sun & Mon
                </p>
            </div>
            <div>
                <h1>
                    Contact info
                </h1>
                
                <p>
                    +12 3456789
                    <br />
                    steambarbers@gmail.com
                </p>
            </div>
            <div>
                <h1>
                    Location
                </h1>
                
                <p>
                    1234 istanbul
                    <br />
                    Turkey
                </p>
            </div>
        </div>
        <div className="service-hot">
                <div className="service-menu">
                    <h1 className="service-hot-header">hot cuts</h1>
                    <br />
                    <hr />
                </div>
                <table>
                    <tr className="service-header">
                        <td><h1>Classic Cut 20$</h1></td>
                        <td><h1>Skin Fade 15$</h1></td>
                    </tr>
                    <tr className="service-data">
                        <td><p>Relax while your barber achieves your tailored look. If you’re looking for a bald fade 
                            or if your hair is currently longer than earlobe length please book from our other options.</p></td>
                        <td><p>Also known as a bald fade or a zero fade, this service requires a little 
                            extra time. Hair is faded from skin or “0” length to your desired length on top.</p></td>
                    </tr>

                    <tr className="service-header">
                        <td><h1>Cut & Beard Trim 40$</h1></td>
                        <td><h1> Skin Fade & Beard Trim 60$</h1></td>
                    </tr>
                    <tr className="service-data">
                        <td><p>Combination of a classic cut and beard/mustache shaping.</p></td>
                        <td><p>Combination of skin fade and beard/mustache shaping.</p></td>
                    </tr>
                </table>
            </div>
    </>
    )
}