import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image from 'next/image'

const Shipping = () => {
    return (
        <div>
            <Navbar />
            <div className="container My-Page">
                <p className="Ship-A Mar-t">How do I get my prepaid shipping LABELS?</p>
                <p className="Ship-B">Once you have approved the purchase, you can request for your labels by email at fa1694701@gmail.com</p>
                <p className="Ship-C">We take care of all customs paperwork for you, so you can sleep well at night!</p>
                <ol type="1">
                    <li className="Ship-B">Buyer's details in full,name,full address, and invoice number.</li>
                    <li className="Ship-B">Box count and if possible boxes dimension.</li>
                    <li className="Ship-B">Total pairs shipped, no need of weight.</li>
                    <li className="Ship-B">Pick up requested yes or no, and address for pickup if needed </li>
                </ol>
                <p className="Ship-B">Labels are then emailed to you within 24h/48h. You can  drop the boxes at an authorized shipper or request a pick-up. We can either <br /> schedule the pick-up for you, during your opening hours, or, you can request the pick-up yourself at your own discretion!</p>

                <p className="Ship-A" >How do I pack the items I have SOLD?</p>
                <p className="Ship-B Mar-bot">This process is very easy! We suggest using standard Nike or Adidas boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 <br /> prs per box. If you unfold boxes properly you may be able to fit an extra pair or two! Check out this video we found (we are not <br /> in that video or know anyone in this video) it is a tutorial for sellers who do not know how to flatten shoe boxes. With this <br /> method you can pack 14 to 15 pairs versus 12 pairs per box:</p>
                <div className="text-center">
                    <Image
                        
                        src="/new.jpg"
                        alt="Picture of the author"
                        width={250}
                        height={170}
                    />


                </div>
                <p className="Ship-B kuch">Do not put more than 15 pairs of shoes per box and do not fold/flatten shoe boxes, that are not foldable! For example, certain <br /> pair of shoes like Jordan retro boxes do not fold and certain adidas consortium do not fold as well so please be very careful!</p>

            </div>
            <Footer />

        </div>
    )
}
export default Shipping;