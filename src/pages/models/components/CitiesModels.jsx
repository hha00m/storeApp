import React from "react";
import { Picker, View, List } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeTownMethod, activeCityMethod,fetchingCitiesMethod } from '../../../store/baskets/actions/index';
import './_style.css';

 
 
class CitiesModel extends React.Component {
    componentDidMount(){
        this.props.fetchingCitiesMethod(this.props.user.user.data.username, this.props.user.user.password)

    }

    onChangeCity = (v) => {
        let i = v[0] - 1;
        let val = this.props.cities[i];
        this.props.activeCityMethod(val.label, this.props.cities);
        // console.log(this.props.activeCity);
    }
    onChangeTown = (v) => {
        let val = this.props.activeCity.towns.filter((town)=>town.value===v[0]);
         this.props.activeTownMethod(val[0]);
    }

    render() {
        return (
            <View>
                <List style={{ paddingRight: '8px', textAlign: 'left', direction: 'rtl', backgroundColor: 'white' }} className="picker-list">


                    <Picker
                        data={this.props.cities} cols={1}
                        extra={this.props.activeCity.label}
                        className="forss"
                        onChange={v => this.onChangeCity(v)}
                    >
                        <List.Item extra={this.props.activeCity.label} arrow="empty" >المحافظة</List.Item>
                    </Picker>
                    <Picker
                        data={this.props.activeCity.towns}
                        extra={this.props.activeTown.label}
                        onChange={v => this.onChangeTown(v)}
                        cols={1} className="forss">
                        <List.Item extra={this.props.activeTown} arrow='empty' >المدينة</List.Item>
                    </Picker>

                </List>
            </View>


        )
    }
};

function mapStateToProps(state) {
    return {
        cities: state.cities.cities,
        activeCity: state.activeCity,
        activeTown: state.activeTown,
        user:state.user,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            activeCityMethod: activeCityMethod,
            activeTownMethod: activeTownMethod,
            fetchingCitiesMethod:fetchingCitiesMethod,
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CitiesModel);