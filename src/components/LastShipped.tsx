import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const GITHUB_USER = "atTommy98";

type GitHubEvent = {
  type: string;
  created_at: string;
};

// Revalidated hourly rather than fetched per request
export async function getLastPush(): Promise<Date | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/events/public`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return null;

    const events: GitHubEvent[] = await response.json();
    const push = events.find((event) => event.type === "PushEvent");

    return push ? new Date(push.created_at) : null;
  } catch {
    return null;
  }
}

// Shows a live dot and how long ago the last push landed, or nothing if unknown.
export default function LastShipped({ lastPush }: { lastPush: Date | null }) {
  if (!lastPush) return null;

  return (
    <p className="subtext flex items-center whitespace-nowrap leading-normal">
      <span aria-hidden="true" className="relative mr-2 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Last shipped {dayjs(lastPush).fromNow()}
    </p>
  );
}
