import React, { useContext } from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const YoutubeDashboard = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Videos Breakdown</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Views</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Favorites</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
            {youtubeData.channelTotalsandVideos.userVideos.map((video, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{video.snippet.title}</td>
                <td>{video.statistics.viewCount}</td>
                <td>{video.statistics.likeCount}</td>
                <td>{video.statistics.dislikeCount}</td>
                <td>{video.statistics.favoriteCount}</td>
                <td>{video.statistics.commentCount}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default YoutubeDashboard;