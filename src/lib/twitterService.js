const TWITTER_API_BASE_URL = 'https://api.twitter.com/2';
const TWITTER_BEARER_TOKEN = import.meta.env.VITE_TWITTER_BEARER_TOKEN;

export async function fetchTweetsByHashtag(hashtag, maxResults = 10) {
  if (!TWITTER_BEARER_TOKEN) {
    console.error("Twitter Bearer Token is missing.");
    return null;
  }

  try {
    const query = encodeURIComponent(`#${hashtag} -is:retweet`);
    const url = `${TWITTER_API_BASE_URL}/tweets/search/recent?query=${query}&max_results=${maxResults}&tweet.fields=created_at,public_metrics,author_id&expansions=author_id&user.fields=name,username,profile_image_url`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Twitter API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return null;
  }
}
