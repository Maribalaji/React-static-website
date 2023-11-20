function Banner(){
    return(
        <div>
            
	<header className="header">
			<div className="logo">
				<h1 className="banner-logo"><span style={{color:"rgb(7, 142, 5)"}}>COM</span>PANY</h1>
			</div>
			
			<input type="checkbox" id="toggle"/>
			<label for="toggle"><i className="fa fa-bars menu" aria-hidden="true"></i></label>
			
			<nav className="navigation">
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#about-section">ABOUT</a></li>
					<li><a href="#service-section">SERVICE</a></li>
					<li><a href="#portfolio-section">PORTFOLIO</a></li>
					<li><a href="#">PRICING</a></li>
					<li><a href="#client-section">BLOG</a></li>
					
					<li><a href="#footer-section">CONTACT</a></li>
				</ul>
			</nav>
			
	</header>
                
              <section id="banner-section">
                <div className="container">
                  <div className="banner-row">
                    <div className="banner-cont">
                        <h1>Welcome to Company</h1>
                        <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <button>Read More</button>
                    </div>

                    </div>
                </div>

        </section>

        </div>
    )
}
export default Banner