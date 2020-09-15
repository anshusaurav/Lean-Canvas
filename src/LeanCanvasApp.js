import React, { Component } from 'react';
import FileUpload from './containers/FileUpload'
import CanvasContainer from './containers/CanvasContainer'
import './scss/index.scss';
import "semantic-ui-css/semantic.min.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      isInputProvided: false,
    }
  }
  onChange = (md) => {
    this.setState({ markdown: md })
  }
  toggleInputProvided = () => {
    this.setState({ isInputProvided: !this.state.isInputProvided })
  }

  render() {
    const { markdown, isInputProvided } = this.state;
    return (
      <>
        {
          isInputProvided ? (<CanvasContainer
            markdown={markdown}
            toggleInputProvided={this.toggleInputProvided} />
          ) : (<FileUpload markdown={markdown}
            onChange={this.onChange}
            toggleInputProvided={this.toggleInputProvided} />)
        }
      </>
    );
  }
}
const placeholder = `# Airbnb

## Problem
  - Hard to find cheap/affordable accomodation options when travelling
  - Stay in hotel cannot provide authentic experience of location
  - Its not easy for home owner to monetize vacant areas on day-by-day basis
  - Existing Alternatives:
    - Booking.com
    - Hotels.com
      
## Solution
  - An online service where travelers can rent an affordable local apartment and homeowners can earn extra money by renting hout.
      
## Key Metrics
  - Number of views-to-bookings per host
  - Number of hosts applied
  
## Unique Value Proposition
  - Travelers can get authentics experience of local area
  - Extra monetization of vacant areas for homeowners
  - High Level Concept:
    - Everyone can become a host Sharing economy
      
## Unfair Advantage
  - Any homeowner can rent out space
  - Trust building: bidirectional rating system of hosts and visitors
  - Insurance by default for hosts
      
## Channels
  - Referrals
  - Recommendations
  - Advertising(Both online and offline)
      
## Customer Segments
  - Travellers looking for an adequate accomodation experience for a low price
  - People having accomodation options to become a host
  - Early Adopters:
    - People ready to share their residence and earn money as hosts
      
## Cost Structure
  - Hosting
  - Development
  - Marketing
  - Payroll
  - Insurance
      
## Revenue Streams
  - Fees for travellers`
export default Main


