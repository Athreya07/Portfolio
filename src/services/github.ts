export async function fetchGitHubProfile(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error('Unable to fetch GitHub profile');
  return response.json();
}
