import Dbconfig from '../../../lib/Dbconfig'
import Visitor from '../../../Modeles/Visitor.model'
import axios from 'axios'

export async function POST(request) {
  await Dbconfig();

  try {
    const body = await request.json();
    const { ip, userAgent, time } = body;

    if (!ip || !userAgent || !time) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await Visitor.create({ ip, userAgent, time });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req) {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: process.env.API_KEY,
        channelId: process.env.CHANNEL_ID,
        part: 'snippet,id',
        order: 'date',
        maxResults: 6,
      },
    });

    const videos = response.data.items.filter(item => item.id.videoId);
    
    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('YouTube API Error:', error.message);
    return new Response(JSON.stringify({ error: 'Failed to fetch videos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}