import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import fetchLeases from './actions/fetchLeases';
import fetchLeaseItem from './actions/fetchLeaseItem';

class App extends Component {

  componentDidMount() {
    const {fetchLeases} = this.props;
    fetchLeases();
  }

  // renderSelectedItem = () => {
  //   if(this.props.leaseDetails.item != null){
  //     return(
  //       <div>
  //       <ul>
  //         {this.props.leaseDetails.item.map(lease =>(
  //           <li>
  //             {lease.id}
  //             {lease.start_date}
  //             {lease.end_date}
  //             {lease.rent}
  //             {lease.frequency}
  //             {lease.payment_day}
  //           </li>
  //         ))}
  //       </ul>
  //       </div>
  //     )
  //   }

  // }

  render(){

    if(this.props.items.pending){
      return(
        <div>
            Fetching data...
        </div>
      )
    }

    return(
      <div>
          <ul>
            {this.props.items.products.map(item => (
              <li onClick={() =>  {
                                    this.props.fetchLeaseItem(item.id);
                                    if(this.props.leaseDetails.item != null){
                                      console.log('DETAILS', this.props.leaseDetails)
                                      alert(this.props.leaseDetails.item + 'have been added!');
                                    }
                                  }
                          } 
              key={item.id}>
                {item.tenant}
              </li>
            ))}
          </ul>       
      </div>
    );

  }

}

function mapStateToProps(state){
  return{
      items: state.leasesReducer,
      leaseDetails: state.getLeaseReducer
  }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
          fetchLeases,
          fetchLeaseItem
        },
        dispatch
    );

App.propTypes = {
  fetchLeases: PropTypes.func,
  fetchLeaseItem: PropTypes.func,
  items: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(App);