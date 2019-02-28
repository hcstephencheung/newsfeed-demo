import React from "react";
import { Dropdown } from "semantic-ui-react";

class SortBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedBy: "",
            sortOptions: [
                { key: 1, text: "Published At", value: "publishedAt" },
                { key: 2, text: "Popularity", value: "popularity" },
                { key: 3, text: "Relevancy", value: "relevancy" }
            ]
        }
    }

    handleSortChange = (e, { value }) => {
        e.preventDefault();
        this.setState({
            sortedBy: value,
        }, () => this.props.handleSort(value))
    }


    render() {
        const { pageStyles } = this.props;
        const { sortedBy, sortOptions } = this.state;

        return (
            <Dropdown
                placeholder="Sort By"
                options={sortOptions}
                onChange={this.handleSortChange}
                selection
                className={pageStyles}
                value={sortedBy} />
        )
    }

}

export default SortBar;