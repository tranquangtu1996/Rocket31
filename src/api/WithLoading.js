import React from "react";

function WithLoading(WrappedComponent) {
    class HOC extends React.Component {
        render() {
            if(this.props.isLoading) {
                return <div>Loading...</div>;
            }
            return <WrappedComponent {...this.props}/>
        }
    }
    return HOC;
}

export default WithLoading;