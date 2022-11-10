import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Hypeindustry = () =>{
    return(
        <div>
            <Navbar />
            <div className="Main">
                <p className="text-center Hype-Head">Selling on HypeIndustry</p>
                <div className="text-center Button-Group">
                    <ButtonGroup />
                </div>
                <div className="Hype-Div-1">
                    <p className="Hype-Head">How do I sell on HypeIndustry?</p>
                    <p className="Hype-Paragraph">To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all the required information. We’ll notify you as soon as your request has been approved.</p>
                    <p className="Third-Div-1">I requested to become a SELLER, how long will it take to get approved?</p>
                    <p className="Third-Div-1">How do I delete my Account?</p>
                    <p className="Third-Div-1">Can I share my seller privileges with others?</p>
                    <p className="Third-Div-1">Can I create several Seller Accounts?</p>
                    <p className="Third-Div-1">How do I become a seller if I have a store outside the USA?</p>
                    <br /><br />


                </div>
                

            </div>
            <Footer />
            

        </div>
    )
}
export default Hypeindustry;