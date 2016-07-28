var SubscribeForm = React.createClass({
    render: function(){
        return(
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="ZGBP7YEA498MG" />
                <input type="hidden" name="on0" value="Donation Options" />
                Donation Options
                <select name="os0">
                    <option value="$5 per Month">$5 per Month : $5.00 USD - monthly</option>
                    <option value="$10 per Month">$10 per Month : $10.00 USD - monthly</option>
                    <option value="$25 per Month">$25 per Month : $25.00 USD - monthly</option>
                    <option value="$40 per Month">$40 per Month : $40.00 USD - monthly</option>
                    <option value="$50 per Month">$50 per Month : $50.00 USD - monthly</option>
                    <option value="$100 per Month">$100 per Month : $100.00 USD - monthly</option>
                    <option value="$250 per Month">$250 per Month : $250.00 USD - monthly</option>
                    <option value="$500 per Month">$500 per Month : $500.00 USD - monthly</option>
                    <option value="$1000 per Month">$1000 per Month : $1,000.00 USD - monthly</option>
                </select>
                <input type="hidden" name="currency_code" value="USD" />
                <br/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            </form>
        );
    }
});

var DonateForm = React.createClass({
    render: function(){
        return(
            <form action="https://www.paypal.com/cgi-bin/webscr/" method="post" target="paypal">
                <input type="hidden" name="cmd" value="_xclick"/>
                <input type="hidden" name="business" value="robin@sheprescue.org"/>
                <input type="hidden" name="item_name" value="Westside German Shepherd Rescue of Los Angeles"/>
                <input type="hidden" name="currency_code" value="USD"/>
                <input type="hidden" name="amount" value=""/>
                <input name="submit" type="image" src="http://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif" alt="Make payments with PayPal - it's fast, free and secure!"/>
            </form>
        );
    }
});

var Donation = React.createClass({
    render: function(){
        return (
            <div id="donateAndSubscribe">

                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#donate" aria-controls="donate" role="tab" data-toggle="tab">Donate</a></li>
                    <li role="presentation"><a href="#subscribe" aria-controls="subscribe" role="tab" data-toggle="tab">Subscribe</a></li>
                    <li role="presentation"><a href="#donationHelp" aria-controls="donationHelp" role="tab" data-toggle="tab">Help</a></li>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active verticalCenter" id="donate">
                        <p>You may now use your credit card to make a DONATION, pay an ADOPTION FEE or contribute to a MEDICAL FUND using the convenient and secure PayPal Service</p>
                        <p>TO MAKE A DONATION, PLEASE CLICK ON THE PAYPAL BUTTON BELOW</p>
                        <DonateForm />
                    </div>
            
                    <div role="tabpanel" className="tab-pane verticalCenter" id="subscribe">
                        <p>TO SIGN UP FOR THE AUTOMATIC MONTHLY DONATION, CHOOSE AN AMOUNT BELOW AND 'SUBSCRIBE' </p>
                        <p>Automatic Monthly Donation</p>
                        <SubscribeForm />
                        <p>An easy way to donate every month to Westside German Shepherd Rescue! The amount you choose will be automatically billed to your PayPal account each month.</p>
                    </div>
            
                    <div role="tabpanel" className="tab-pane verticalCenter" id="donationHelp">
                        <p>If you experience a problem making a payment,</p>
                        <p>please call Paypal at (402)935-7733 [United States] and press Zero to bypass menu and get to a HELP representative.</p>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Donation />, document.getElementById('content'));