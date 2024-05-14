function Prop(Props){
    return(
<div className="prop">
    <div className="prop-nm">
    <div className="prop-lf">
        <img src={Props.im} alt="" />
    </div>
    <div className="prop-rg">
        {/* title */}
        <h1>{Props.title}</h1>
        {/* subtitle */}
        <span>{Props.subtitle}</span>
        {/* price */}
        <h2>{Props.price}</h2>
    </div>
    </div>
</div>
    )
}
export default Prop;