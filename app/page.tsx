"use client";

import { HeaderBanner } from "@/components/header/header_banner";
import { GlobalNav } from "@/components/nav/global_nav";
import { ScrollBlock } from "@/components/scroll_block/scroll_block";
import styles from "./page.module.css";
import { useQuery } from "@/hooks/use_query/use_query";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <GlobalNav />
      <div className={styles.layout}>
        <div className={styles.sidebar}></div>
        <div className={styles.content}>
          <ScrollBlock>
            <TopPlayers />
          </ScrollBlock>
        </div>
      </div>
    </>
  );
}

function TopPlayers() {
  const topPlayersQuery = useQuery(fetchTopPage);

  switch (topPlayersQuery.status) {
    case "pending":
      return <div>Loading...</div>;
    case "error":
      return <div>Error fetching players</div>;
    case "success":
      return (
        <table>
          <thead>
            <tr>
              <th align="right">Rank</th>
              <th>Name</th>
              <th align="center">Account Type</th>
              <th align="right">Overall EHP</th>
            </tr>
          </thead>
          <tbody>
            {topPlayersQuery.response.map((player, index) => (
              <tr key={index}>
                <td align="right">{player.rank.toLocaleString()}</td>
                <td>{player.displayName}</td>
                <td align="center">{player.accType}</td>
                <td align="right">
                  {player.ehp.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
  }
}

type Player = {
  rank: number;
  displayName: string;
  accType: string | undefined;
  ehp: number;
};

async function fetchTopPage(): Promise<Player[]> {
  const respRaw = await fetch(
    "https://api.wiseoldman.net/v2/efficiency/leaderboard?metric=ehp&playerBuild=f2p&limit=25",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const resp: unknown = await respRaw.json();

  // todo: zod schemas?
  if (!Array.isArray(resp)) {
    throw new Error("Malfomred response");
  }

  return resp.map((player, index) => ({
    rank: index + 1,
    displayName: player?.displayName ?? "Unknown player",
    accType: player?.type,
    ehp: player?.ehp ?? -1,
  }));
}
