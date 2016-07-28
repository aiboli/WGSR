var NavBar = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a>
                            <img className="img-responsive navbar-brand img-rounded" id="hannahImg" src="images/hannahMemory.png" alt="Hannah" />
                        </a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseMenu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="collapseMenu">
                        <ul className="nav navbar-nav" id="navbar-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="">Available Dogs</a></li>
                            <li><a href="donate.html">Donate</a></li>
                            <li><a href="Application.html">Application</a></li>
                            <li><a href="">Volunteer</a></li>
                            <li><a href="">Courtesy Listings</a></li>
                            <li><a href="">Tails of Joy</a></li>
                            <li><a href="FAQ.html">F.A.Q.</a></li>
                            <li><a href="">Adopted Dogs</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var Banner = React.createClass({
  render: function() {
    return (
      <div className="banner row" id="bannerImg">
        <img className="img-responsive col-xs-12" id="bannerImg" src="images/banner71.png" alt="Westside German Shepherd Rescue of Los Angeles" />
      </div>
    );
  }
});

var Footer = React.createClass({
    render: function(){
        return (
            <div id="footer">
                <div id="footerContent" className="container">
                        <div id="footerContentLeft" className="col-xs-12 col-sm-6">
                            <p>How to REACH or FIND us</p>
                            <p>Closed to the public except for adoption days</p>
                            <p>3016 S. Hill St, Los Angeles CA 90007</p>
                        </div>
                        <div id="footerContentRight" className="col-xs-12 col-sm-6">
                            <p>To send us an email</p>
                            <p>Please first read FAQ</p>
                            <p><a href="mailto:info@sheprescue.org" target="_top">info@sheprescue.org</a></p>
                        </div>
                    <p className="col-xs-12">Copyright © Westside German Shepherd Rescue. All rights reserved.</p>
                </div>
            </div>
        );
    }
});


ReactDOM.render(<div className="container">
                    <NavBar />
                    <Banner />
                </div>,
            document.getElementById('navbarAndBanner')
);

ReactDOM.render(<Footer />, document.getElementById('footer'));
