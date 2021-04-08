import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { client } from "../../App";

const GET_DATA = gql`
    query{
        slider(sliderId: "606ec4f87a26b539448f40e0"){
            slides{
                id
                name
                image
                content
                contentPosition
                link
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

    return data.slider.slides.map(({ id, content, contentPosition, image, link }) => {
        return [
            id,
            content,
            contentPosition,
            `https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${image}`,
            link
        ]
    });
}

export default Data;