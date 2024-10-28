import React from 'react'

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white rounded-md p-4 m-4">
    <ul className="space-y-4">
      <li>Top Tracks</li>
      <li>Playlists</li>
      <li>Recent Tracks</li>
      <li>Recommendations</li>
    </ul>
  </aside>
  )
}

export default Sidebar;