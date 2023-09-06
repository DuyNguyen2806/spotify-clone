import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs,handleSetSong ,song} = useContext(Songs);
  const [idSong, setIDSong] = useState();
  const handlePlaySong = (idSong) => {
    setIDSong(idSong);
    handleSetSong(idSong)
  };
  useEffect(()=>{setIDSong(song.id)
  },
  [song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download" />
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong == song.id && 'text-teal-400 bg-slate-600'} cursor-pointer`}
              onClick={() => handlePlaySong(song.id)}
            >
              <th className="text-center">{index + 1}</th>
              <th className="text-left">{song.name}</th>
              <th className="text-center">{song.author}</th>
              <th className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download" />
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
