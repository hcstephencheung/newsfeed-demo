import React from "react";
import { Card, Image } from "semantic-ui-react";

const SearchResults = ({ articles }) => (
    <Card.Group>
        {articles.map(article => (
            <Card href={article.url} target="_blank">
                <Card.Content>
                    <Card.Header>{article.title}</Card.Header>
                    <Card.Meta>{article.author}</Card.Meta>
                    <Image src={article.urlToImage} />
                    <Card.Description>{article.description}</Card.Description>
                    <Card.Meta>{article.publishedAt}</Card.Meta>
                </Card.Content>
            </Card>
        ))}
    </Card.Group>
);

export default SearchResults;
