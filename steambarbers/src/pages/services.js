export function Services()
{
    return (
        <div>
            <div className = "services-top-img">
                <div className = "services-content-on-img">
                    <p>
                        Check our menu.
                    </p>
                </div>
            </div>
            <div className="service-menu">
                <h1>Our menu</h1>
                <br />
                <hr />
            </div>
            <div className="service-container">
                <table>
                    <tr className="service-header">
                        <td><h1>Long Cut 60$</h1></td>
                        <td><h1>Beard Trim 25$</h1></td>
                    </tr>
                    <tr className="service-data">
                        <td><p>If your hair is currently past your earlobes, this is the service for you; whether you’re
                             keeping your long locks or chopping them off for a new look.</p></td>
                        <td><p>Let your barber apply their artistry to help you create the perfectly shaped beard or mustache style you envision.</p></td>
                    </tr>
                    <tr className="service-header">
                        <td><h1>Cut & Shave 75$</h1></td>
                        <td><h1>Shave 40$</h1></td>
                    </tr>
                    <tr className="service-data">
                        <td><p>Classic combination of both a full service haircut and hot towel shave.</p></td>
                        <td><p>Experience a traditional hot towel shave with a straight razor and warm shaving cream that will leave your face smooth to the touch.</p></td>
                    </tr>
                    <tr className="service-header">
                        <td><h1>Buzz 25$</h1></td>
                        <td><h1>Buzz & Beard Trim 50$</h1></td>
                    </tr>
                    <tr className="service-data">
                        <td><p>Ask for a buzz cut if you're looking for a no-nonsense low maintenance look at a uniform length as close as you'd like.</p></td>
                        <td><p>Combination of single length buzz cut and beard/mustache shaping.</p></td>
                    </tr>
                </table>
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
        </div>
    )
}