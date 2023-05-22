import React from 'react';

const Details = () => {
    const data = [
        {
            id: 1,
            name: 'Service Name',
            description: 'Service Description',
            price: 100,
            img: 'https://picsum.photos/200/300',
            duration: 60,
        },
    ];
    return (
        <div>
            <div>
                <h1>Details</h1>
                <img src={data[0].img} alt="img" />
            </div>
            <div>
                <h2>{data[0].name}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Description</td>
                            <td>{data[0].description}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{data[0].price}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>{data[0].duration} minutes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Details;