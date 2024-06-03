function Banner(){
    function clk(){
alert("click ho raha h");
}
    return(
        <div className="banner" onClick={clk}>
            {/* <i class="fa-solid fa-font"></i> */}
            <img src="https://images.hdqwalls.com/wallpapers/superman-legacy-5k-movie-om.jpg" alt="" />
        </div>
    )

}
export default Banner;