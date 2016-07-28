
const Acc = React.createClass({
  getInitialState: function() {
   // naming it initialX clearly indicates that the only purpose
   // of the passed down prop is to initialize something internally
   return {active:false};
 },

  toggle: function(){
    this.setState({
      active:!this.state.active
    });
  },

  render: function()
  {
    var StateStyle = this.state.active ? styles.active : styles.inactive;
    return (
      <div className='list-group'>
      <button onClick={this.toggle} type="button" className="list-group-item">{this.props.data.summary}</button>
      <div style={StateStyle} className="panel panel-default">
      <div className="panel-body">{this.props.data.details}
      </div>
      </div>
      </div>


    );
  }
});
const wellStyles = {maxWidth: 800, margin: '0 auto 10px'};

const styles = {
  active:{
    display : 'inherit'
  },
  inactive : {
    display: 'none'
  }
};

const data1={
    summary:'What is the adoption process?',
    details:'The first step is always filling out an application. Please be sure to answer ALL questions, including Landlord info with name and contact number please dont answer: available upon request - the question on the application IS the request without this info we can not proceed. Once your application is received, one of our adoption counselors will get in touch with you within 24-48 hours. Please be patient, we are all volunteers and will get back to you as soon as we can. If you havent heard back within 5 days, please send us an email to make sure we actually received your application. There are times when they end up in cyber heaven without ever reaching us. We do aerial and home checks before your application is approved. Once you are approved, be sure to BRING THE WHOLE FAMILY AND ALL OF YOUR CURRENT DOGS. It is VERY important that your current dogs and any new potential dog meet to see how they get along. In most cases we can not proceed with an adoption until your dogs come down with you. In most cases the dog is able to go home with you on the day of adoption unless they still need to be spayed/neutered. This will be scheduled and you will be able to pick up your dog once he/she has been fixed.All our dogs are up to date with shots, are micro chipped and are/will be spayed/neutered before adoption. The adoption fee includes all this plus the one time registration fee with the microchip company. We will do the chip registration for you 10-14 days after adoption, and after you inform us if/what you changed the dogs name to.In the case of puppies and fostered dogs, once approved, you will be put in touch with the foster family and a meeting is arranged.'
};

const data2={
    summary:'What is the adoption fee and what does it include?',
    details:'Our general adoption fee is $345, but fees can vary and range from $150 to $500. They are set, taking into account the dogs age, training level, temperament, if they are newly arrived, medical conditions if any and other factors. Adoption fees are used not only to rescue and place the dog you are personally adopting, but to aid in the future rescue and rehabilitation of other deserving dogs. Adoption fees are necessary. without fees our rescue efforts would quickly come to an end. The adoption fee includes spay/neuter, microchip, microchip registration and up to date vaccinations. '
};

const data3={
    summary:'Do you adopt to homes out of state?',
    details:'Yes, we do. (dogs 6 mos and up - no puppies under 6 mos) We require a very detailed application and digital pictures of your home, fencing and yard.'
};

const data4={
    summary:'Whats the general cost for out of state adoptions? ',
    details:'Out of state adopters are required to pay the adoption fee; Health Certificate required by the airlines ($35); Crate ($100-250) depending on the size of the dog); Transport to airport ($50); Airfare (the cost varies depending on where you live, what airline you use, what day or/or time of the day the flight is, size of the dog & crate etc) The average cost with adoption fee, crate, transport to airport, health certificate and airfare included usually totals about $1200-1300.'
};
const data5={
    summary:'When and where can I see your dogs?',
    details:'We have an adoption event every Saturday (11am-4pm); Sunday 1pm-4pm and Wednesday (11am-3pm) at our boarding place at 3016 S Hill St, Los Angeles 90007. No appointment is necessary on these days. We can also show dogs on other days BY APPOINTMENT only. Several of our dogs are in foster homes in various locations around LA. Arrangements need to be made with the foster families to meet the dogs in their care.'
};
const data6={
    summary:'Tell me about fostering your dogs. ',
    details:'The first step is always filling out an application. Whether you are fostering or adopting, we always need to make sure we match you up with the right shepherd. They all have different personalities, likes and dislikes and it is very important that foster families and their foster dogs live in ~harmony~. Fosters care for the dogs in their homes until the dog is adopted by his/her forever family. Rescue pays for their medical care while they are foster dogs, unless the family wants to pick up the tab, which is always appreciated by us.'
};

const data7={
    summary:'Do you place dogs in homes with small children? ',
    details:'Yes we do. Most German Shepherd are wonderful with kids in general, although we always have dogs that would do better without small kids. Some might knock them over in their enthusiasm, some very young pups might consider kids as chew toys (you know those teething months), and some just might not be good with children. We always do our best to match the right temperament with the right family/kids, although there are no guarantees.'
};

const data8={
    summary:'Cannot afford medical care for your dog?',
    details:'Before you give up and take your dog to the animal shelter or worse, put them to sleep, please check out the organizations below who might be able to help you! http://www.angels4animals.org/ http://www.thepetfund.com/ http://www.redrover.org/redrover-relief-grants http://www.carecredit.com/ http://www.imom.org/ http://www.giveforward.com/cause/raise-money-for-pet-expenses http://www.vftafoundation.org/programs/helping-friends/ http://www.actorsandothers.com/emergencyhelp.html www.samsimonfoundation.com The Sam Simon Foundation: Los Angeles (free surgery for non-orthopedic procedures; free spay/neuter operations, including vaccinations, flea control, deworming, nail trims, and antibiotics)'
};
ReactDOM.render(<div className='container'><Acc data={data1}/><Acc data={data2}/><Acc data={data3}/><Acc data={data4}/><Acc data={data5}/><Acc data={data6}/><Acc data={data7}/><Acc data={data8}/></div>,
document.getElementById('content'));
