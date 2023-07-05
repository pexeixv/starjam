import { request, gql } from "graphql-request";
const url = import.meta.env.CONTENT_API;

const queries = {
  products: gql`
    query Products {
      products {
        title
        subtitle
        image {
          url
        }
        slug
        drumSizes {
          sizeInInches
        }
        drumColours {
          name
          colourCode {
            hex
          }
          image {
            url
          }
        }
        images {
          url
        }
        content {
          html
        }
      }
    }
  `,
};

const hygraph = async (query) => {
  const res = await request(url, queries[query]);
  const data = await res[query];
  return data;
};

export default hygraph;

const json = {
  drumType: "Rope Weave",
  drumBody: "Mango Wood Body",
  image: "https://media.graphassets.com/q3Udffo1RFbx49qRYfdI",
};
