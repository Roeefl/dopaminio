import React from 'react';
import { ScrollView } from 'react-native';
import House from './House';

class HouseList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        console.log('mounted');
        this.fetchHouses();
    }

    fetchHouses = () => {
        const HOUSES_API_PATH = 'https://anapioficeandfire.com/api/houses/?hasWords&hasDiedOut=false&page=1&pageSize=50';

        fetch(HOUSES_API_PATH)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState(
                    {
                        houses: data
                    }
                );
            });
    }

    renderHouses() {
        const houseList = this.state.houses.map(house =>
            <House
                key={house.name}
                house={house}
            />
        );

        return houseList;
    }

    render() {
        return (
            <ScrollView>
                {this.renderHouses()}
            </ScrollView>
        );
    }
}

export default HouseList;
