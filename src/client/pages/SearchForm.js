import React from "react";
import { fetchData } from "../../utils/fetchData";

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            articles: []
        }
    }

    handleSearchChange = e => {
        this.setState({
            query: e.target.value,
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { status, articles } = await fetchData(this.state.query);
        if (!!status && !status.localeCompare("ok")) {
            this.setState({
                articles
            })
        }
    }

    render() {
        const { query, articles } = this.state;

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearchChange}></input>
                    <button type="submit" onSubmit={this.handleSubmit}>Search!</button>
                </form>

                <p>{query}</p>

                {!!articles.length && articles.map(article => (
                    <h1>{article.title}</h1>
                ))}
            </React.Fragment>
        );
    }

}