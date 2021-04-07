import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { client } from "../../App";

const GET_DATA = gql`
    query{
        getCategoryProducts(categoryId: "602e537c205367233c805511"){
            products {
                id
                name
            }
        }
    }
`;

const Data = () => {
    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

// useEffect(() => {
//    client
//      .query({
//         query: gql`
//           query{
//             getCategoryProducts(categoryId: "602e537c205367233c805511"){
//               products {
//                  id
//                  name
//                 }
//              }
//            }
//          `
//         })
//         .then(result => console.log(result)); 
// }, [])

    return data.getCategoryProducts.products.map(({ id, name }) => {
        return( <div key={id}>
          <p>
            {id}: {name}
          </p>
        </div>)
    });
}

export default Data;