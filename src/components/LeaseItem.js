import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LeaseItem extends Component {

    render(){
        if(this.props.leaseDetails.item == {}){
            return(
                <div>
                    <p>FETCHING...</p>
                </div>
            );
        }
        return(
            <div>
                <ul>
                    <li>{this.props.leaseDetails.item.id}</li>
                    <li>{this.props.leaseDetails.item.start_date}</li>
                    <li>{this.props.leaseDetails.item.end_date}</li>
                    <li>{this.props.leaseDetails.item.rent}</li>
                    <li>{this.props.leaseDetails.item.frequency}</li>
                    <li>{this.props.leaseDetails.item.payment_day}</li>
                </ul>
            </div>
        );
    }
};

function mapStateToProps(state){
    return{
        leaseDetails: state.getLeaseReducer
    }
}
  

LeaseItem.propTypes = {
    leaseDetails: PropTypes.object
}


export default connect(mapStateToProps)(LeaseItem);