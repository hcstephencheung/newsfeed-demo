import React from "react";
import { Dropdown } from "semantic-ui-react";

const SortBar = ({ pageStyles, handleSort }) => {
    const handleSortChange = (e, { value }) => {
        e.preventDefault();
        handleSort(value);
    }

    const sortOptions = [
        { key: 1, text: "Published At", value: "publishedAt" },
        { key: 2, text: "Popularity", value: "popularity" },
        { key: 3, text: "Relevancy", value: "relevancy" }
    ]

    return (
        <Dropdown
            text="Sort By"
            options={sortOptions}
            onChange={handleSortChange}
            selection
            className={pageStyles} />
    )
}

export default SortBar;