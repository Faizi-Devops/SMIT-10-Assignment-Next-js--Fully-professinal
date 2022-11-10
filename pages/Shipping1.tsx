import Navbar from "../components/Navbar/Navbar";
import Image from 'next/image';
import Footer from "../components/Footer/Footer";

const Shipping1 = () => {
    return (
        <div className="Ship1-All-Page">
            <Navbar />
            <div className="container Ship1-A">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="Ship1-Heading">Shipping for buyers</p>
                        <p className="Ship1-paragraph">All of our items are being shipped from several warehouses/stores in the <br /> USA and worldwide, and usually ships within 24h to 5 business days <br /> depending on the seller’s shipping time.</p>
                        <p className="Ship1-Second-Heading">We take care of all customs paperwork for you , so you can sleep well at <br /> night!</p>
                        <p className="Ship1-paragraph">1:&nbsp;&nbsp;&nbsp;<span className="Ship1-Second-Heading"> Sellers:</span> Just pack the shoes, tape the box(es)properly with lots of <br /> tape, request your labels via email, and relax! The rest will be taken <br /> care of ☺</p>
                        <p className="Ship1-paragraph">2:&nbsp;&nbsp;&nbsp;<span className="Ship1-Second-Heading"> Buyers:</span> Don’t worry, we will make sure: a proper value, tariff code and description are entered and that no problems occur from the time <br /> packages leave the country and arrive in your country to clear <br /> customs!</p>

                    </div>
                    <div className=" text-center col-lg-6 col-md-6 col-sm-12">
                        <Image

                            src="/3.jpg"
                            alt="Picture of the author"
                            width={350}
                            height={360}
                        />


                    </div>

                </div>

                <div className="row Ship1-Second-Div">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        

                        
                        <Image className="image-Overflow"

                            src="/4.jpg"
                            alt="Picture of the author"
                            width={500}
                            height={200}
                            
                        />
                       

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="container">

                      
                        <p className="Ship1-Second-Paragraph">How much does shipping COST</p>
                        <p className="Ship1-paragraph-New">The default shipping cost for sellers & buyers on the platform is $2.50/pair for domestic shipments within the USA, and $10-$12.50/pair for international express shipments. That will vary based on the seller & buyer location. Of course, shipping cost are pretty low, as we are dealing with bulk purchases, resulting in cost-effective shipping.</p>
                        </div>

                    </div>

                </div>

                

            </div>
            <div className="Ship1-Third-Div">
                    <div className="Ship1-under-Third">
                        <p className="Third-Div-1">Can I change my shipping address once my order has been placed?</p>
                        <p className="Third-Div-Paragraph">Hypeindustry is unable to change a shipping address once the order has been placed. So please make sure all personal and <br /> corporate information are correct on your user profile.Also the shipping address on file has to match your billing address!</p>
                        <p className="Third-Div-1">Why does my billing and shipping address have to MATCH?</p>
                        <p className="Third-Div-1">Can I edit my order once I placed It?</p>
                        <p className="Third-Div-1">Can I change the Shipping Address AFTER the order has been placed?</p>
                        <p className="Third-Div-1 Sip">How long does it take to ship?</p>
                        <br />
                    </div>

                </div>
                <Footer />

        </div>
        
    )
}
export default Shipping1;