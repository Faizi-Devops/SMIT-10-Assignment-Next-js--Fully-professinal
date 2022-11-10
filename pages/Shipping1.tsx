import Navbar from "../components/Navbar/Navbar";
import Image from 'next/image';

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

            </div>

        </div>
    )
}
export default Shipping1;