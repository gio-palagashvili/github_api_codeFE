interface User {
    name: string;
    login: string;
    created_at: number;
    company?: string;
    blog?: string;
    twitter_username?: string;
    public_repos: number,
    followers: number,
    following: number,
    location: string;
    bio?: string;
    avatar_url: string;
    html_url: string;
}