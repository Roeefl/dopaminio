import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Resource from './Resource';

class ResourceList extends React.Component {
    renderItem = (resource) => {
        // const resourceList = this.props.resources.map(resource =>
        return (
            <Resource
                // key={resource.item.id}
                resource={resource.item}
            />
        );
        // );
        // return resourceList;
    }

    render() {
        // console.log(this.props);
        
        return (
            <FlatList
                data={this.props.resources}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    
    return (
        {
            resources: state.resources,
            selectedResource: state.selectedResource
        }
    );
};

export default connect(
    mapStateToProps
)(ResourceList);
