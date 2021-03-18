import React, { Component } from 'react';
import products from "./products.json";
import Search from "../Search";
import Card from "../Card";


class Results extends Component {
    state = {
        search: "",
        results: products,
        products
    }

    searchProducts = search => {
        this.setState({ results: products });
        // Filter for products with a title that is approximate to the search made by user
        const results = this.state.products.filter((result) => {
            return result.title.toLowerCase().includes(search.toLowerCase()) !== false || result.category.toLowerCase().includes(search.toLowerCase()) !== false
        })
        this.setState({ results });

    };

    // responsible for removing products from directory
    removeProduct = id => {
        // // Filter for products with an id not equal to the id being removed
        const results = this.state.results.filter(product => products.id !== id);
        this.setState({ results });
    };

    // responsible for searching products as user types on search bar
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        event.preventDefault();
        setTimeout(() => {
            return this.searchProducts(this.state.search);
        }, 1000);
    };

    render() {
        return (

            <div>
                <Search
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />

                <div className='row'>
                    <div className="col text-center">
                        {this.state.results.map(result => (
                            <Card
                                removeProduct={this.removeProduct}
                                id={result.id}
                                key={result.id}
                                title={result.title}
                                price={result.price}
                                description={result.description}
                                category={result.category}
                                image={result.image}
                                >
                            </Card>
                        ))}
                    </div>
                </div>
                <hr />
                <br />

            </div>
        )
    }
}

export default Results;