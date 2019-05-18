import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import fetchLeases from '../actions/fetchLeases';
import fetchLeaseItem from '../actions/fetchLeaseItem';
import { Link } from 'react-router-dom';

class Home extends Component{
    
    componentDidMount() {
        const {fetchLeases} = this.props;
        fetchLeases();
    }

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
                    <Link to={{
                        pathname: "/leaseItem",
                        state: {
                            selectedItem: this.props.leaseDetails 
                        }
                    }}>
                        {
                            this.props.items.products.map((item) => (
                                <li key={item.id}  onClick={() => { this.props.fetchLeaseItem(item.id)}}>
                                    {item.tenant}
                                </li>
                            ))
                        }
                    </Link>
                </ul>  
            </div>
        );
    }
};

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
  
    Home.propTypes = {
        fetchLeases: PropTypes.func,
        fetchLeaseItem: PropTypes.func,
        items: PropTypes.object
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);