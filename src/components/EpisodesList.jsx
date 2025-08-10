// Episodes.js
import Episode from "./Episode";
import { useQuery } from "@tanstack/react-query";
import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://api.taddy.org/", {
  headers: {
    "X-USER-ID": "3205",
    "X-API-KEY":
      "6e6b6097b65b09d042a6b836a8b1b9f4c75934d38c647bfcf66b6d1b24acc8ab79d11070c01d82dde358af56ed9870bdde",
  },
});

const GET_PODCASTSERIES = gql`
  query getPodcastSeries($name: String!) {
    getPodcastSeries(name: $name) {
      uuid
      hash
      name
      description
      episodes {
        uuid
        name
        description
        datePublished
        audioUrl
        duration
      }
    }
  }
`;

export default function Episodes() {
  const {
    data: episodes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["episodes"],
    select: (data) => data.getPodcastSeries.episodes,
    queryFn: async () =>
      await client.request(GET_PODCASTSERIES, { name: "The Daily" }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching episodes</div>;

  console.log(episodes);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Episodes</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {episodes.map((episode) => (
          <Episode
            key={episode.uuid}
            episode={episode}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
