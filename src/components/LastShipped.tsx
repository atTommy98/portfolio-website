const GITHUB_USER = "atTommy98";

type GitHubEvent = {
  type: string;
  created_at: string;
};

/* Revalidated hourly rather than fetched per request: the copy reads in
   whole hours anyway, and it keeps us well inside GitHub's unauthenticated
   rate limit no matter how much traffic the page gets. */
export async function getLastPush(): Promise<Date | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/events/public`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) return null;

    const events: GitHubEvent[] = await response.json();
    const push = events.find((event) => event.type === "PushEvent");

    return push ? new Date(push.created_at) : null;
  } catch {
    return null;
  }
}

function timeAgo(date: Date): string {
  const minutes = Math.round((Date.now() - date.getTime()) / 60000);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.round(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;

  const months = Math.round(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

export default function LastShipped({ lastPush }: { lastPush: Date | null }) {
  /* Render nothing rather than a stale or empty state if GitHub is
     unreachable at build time. */
  if (!lastPush) return null;

  return (
    <p className="subtext mt-4 flex items-center leading-normal">
      <span aria-hidden="true" className="relative mr-2 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Last shipped {timeAgo(lastPush)}
    </p>
  );
}
