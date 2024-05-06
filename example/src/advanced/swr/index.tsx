import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Profile = () => {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  return (
    <ul>
      <li>{data?.name}</li>
      <li>{data?.description}</li>
      <li>{data?.subscribers_count}</li>
      <li>{data?.stargazers_count}</li>
      <li> {data?.forks_count}</li>
    </ul>
  );
};
