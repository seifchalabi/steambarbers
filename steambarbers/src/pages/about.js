import crew1 from "../images/crew1.png";
import crew2 from "../images/crew2.png";
import crew3 from "../images/crew3.png";
import crew4 from "../images/crew4.png";

export function About()
{
    return (
        <>
            <div className = "about-top-img">
                <div className = "about-content-on-img">
                    <p>
                        Get to know our staff and barbers.
                    </p>
                </div>
            </div>
            <div className="crew">
                <h1>Our crew</h1>
                <br />
                <hr />
            </div>
            <div className="crew-container">
                <table>
                    <tr className="crew-header">
                        <td><p><img src = {crew1} alt = "crew1" /></p></td>
                        <td><p><img src = {crew2} alt = "crew2" /></p></td>
                    </tr>
                    <tr className="crew-data">
                        <td><h1>Micheal john</h1></td>
                        <td><h1>Emma smith</h1></td>
                    </tr>
                    <tr className="crew-header">
                        <td><p><img src = {crew3} alt = "crew3" /></p></td>
                        <td><p><img src = {crew4} alt = "crew4" /></p></td>
                    </tr>
                    <tr className="crew-data">
                        <td><h1>Yvonne</h1></td>
                        <td><h1>Nats Sebastian</h1></td>
                    </tr>
                </table>
            </div>
            <div className = "crew-word-section">
                <h1>
                    We are diligent in  our work, we want to make our customers look great and create a great environment for them
                    as well as a great experience at the barber shop. We want to build a community.
                </h1>
                <p>
                    -Steam Barbers crew
                </p>
        </div>
        </>
    )
}