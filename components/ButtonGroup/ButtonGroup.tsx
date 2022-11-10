const ButtonGroup = () =>{
    return(
      
        <div className="btn-group " role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check remove-border" name="btnradio" id="btnradio1" autoComplete="off" checked/>
        <label className="btn btn-outline-success remove-border"htmlFor="btnradio1">BECOME A SELLER</label>
      
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
        <label className="btn btn-outline-success remove-border" htmlFor="btnradio2">CREATE A LISTING</label>
      
        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
        <label className="btn btn-outline-success remove-border" htmlFor="btnradio3">SELLER FEES</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
        <label className="btn btn-outline-success remove-border" htmlFor="btnradio4">CONDITION OF ITEMS</label>
      </div>
    )
}
export default ButtonGroup;