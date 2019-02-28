import React from "react";
import * as moment from "moment";
import { Card, Image } from "semantic-ui-react";

const SearchResults = ({ articles = [], pageStyles }) => (
    <Card.Group className={pageStyles}>
        {articles.map(article => (
            <Card href={article.url} target="_blank">
                <Card.Content>
                    <Card.Header>{article.title}</Card.Header>
                    <Card.Meta>{article.author}</Card.Meta>
                    <Image src={article.urlToImage} />
                    <Card.Description>{article.description}</Card.Description>
                    <Card.Meta>{moment.default(article.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</Card.Meta>
                </Card.Content>
            </Card>
        ))}
    </Card.Group>
);

export default SearchResults;
