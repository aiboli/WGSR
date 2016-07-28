
var LeftArrow = React.createClass({
    handleClick: function(){
        this.props.onArrowClick();
    },
    render: function(){
        return (
            <div id="leftNavArrowDiv" onClick={this.handleClick}>
                <span id="leftNavArrowGlyohicon" className="glyphicon glyphicon-arrow-left"></span>
            </div>
        );
    }
});

var RightArrow = React.createClass({
    handleClick: function(){
        this.props.onArrowClick();
    },
    render: function(){
        return (
            <div id="rightNavArrowDiv" onClick={this.handleClick}>
                <span id="rightNavArrowGlyohicon" className="glyphicon glyphicon-arrow-right"></span>
            </div>
        );
    }
});

var SlideContents = React.createClass({
    render: function(){
        if(this.props.sectionNum == 0){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-0">
                    <p>Westside German Shepherd Rescue of Los Angeles is a non profit 501(c)3, no kill rescue committed to saving all types of German Shepherd Dogs from high kill shelters and adopting them to loving, qualified homes.</p>
                </div>
            );
        }else if(this.props.sectionNum == 1){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-1">
                    <p>We have almost 100 dogs in our kennel, we require an application first so we can show you dogs who might be right for your home. We know our dogs and once we get to know you better, we can help you select your next family member!</p>
                    <p>All our puppies are in foster homes getting lots of love and socializing to help them transition easily into their new homes. To meet puppies in their foster homes, start with an on-line application.</p>
                    <img className="img-responsive" src="images/hill building jpg.jpg" />
                </div>
            );
        }else if(this.props.sectionNum == 2){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-2">
                    <img src="images/auroraindex516.jpg" className="img-responsive"/>
                </div>
            );
        }else if(this.props.sectionNum == 3){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-3">
                    <img src="images/auction april2014new.jpg" className="img-responsive"/>
                    <p>On-Line Auctions are held monthly.100% of the proceeds goes to the rescue.</p>
                    <p>Please go to:https://www.biddingforgood.com/westside </p>
                    <p>Please contact the Admins on the auction page to donate goods or services for our next on line auction.</p>
                    <p>THANK YOU!</p>
                </div>
            );
        }else if(this.props.sectionNum == 4){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-4">
                    <img src="images/storead.jpg" className="img-responsive"/>
                </div>
            );
        }else if(this.props.sectionNum == 5){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-5">
                    <span>section 5</span>
                </div>
            );
        }else if(this.props.sectionNum == 6){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-6">
                    <span>section 6</span>
                </div>
            );
        }else if(this.props.sectionNum == 7){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-7">
                    <span>section 7</span>
                </div>
            );
        }else if(this.props.sectionNum == 8){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-8">
                    <span>section 8</span>
                </div>
            );
        }else if(this.props.sectionNum == 9){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-9">
                    <span>section 9</span>
                </div>
            );
        }else if(this.props.sectionNum == 10){
            return (
                <div className="slideSectionContents verticalCenter" id="slideSectionContent-10">
                    <span>section 10</span>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
});

var SlideContentsWithTwoArrows = React.createClass({
    getInitialState: function(){
        return {
            sectionNum : 0
        };
    },
    handleRightArrowClick: function(){
        if(this.state.sectionNum == 10){
            this.setState({
                sectionNum : 0
            });
        }else{
            this.setState({
                sectionNum : ++this.state.sectionNum
            });
        }
    },
    handleLeftArrowClick: function(){
        if(this.state.sectionNum == 0){
            this.setState({
                sectionNum : 10
            });
        }else{
            this.setState({
                sectionNum : --this.state.sectionNum
            });
        }
    },
    render: function(){
        return(
            <div id="slideContentsWithTwoArrows">
                <LeftArrow onArrowClick={this.handleLeftArrowClick}/>
                <SlideContents sectionNum={this.state.sectionNum} />
                <RightArrow onArrowClick={this.handleRightArrowClick}/>
            </div>
        );
    }
});

ReactDOM.render(<SlideContentsWithTwoArrows />, document.getElementById('content'));