import React from "react";
import { Gallery } from "next-gallery";

const images = [
  { src: "/images/weteam/team1.jpg", aspect_ratio: 1 / 1 },
  { src: "/images/weteam/team2.jpg", aspect_ratio: 9 / 16 },
  { src: "/images/weteam/team3.jpg", aspect_ratio: 16 / 9 },
  { src: "/images/weteam/team4.jpg", aspect_ratio: 9 / 16 },
  { src: "/images/weteam/team5.png", aspect_ratio: 1 / 1 },
  { src: "/images/weteam/team6.jpg", aspect_ratio:  9 / 16 },
  { src: "/images/weteam/team7.png", aspect_ratio: 3 / 2 },
  { src: "/images/weteam/team8.png", aspect_ratio: 2 / 1 },
  { src: "/images/weteam/team8.png", aspect_ratio: 2 / 1 },
];

const widths = [500, 1000, 1600];
const ratios = [2.2, 4, 6, 8];

export default function Gallerys() {
  return (
    <div className="flex flex-col gap-10">
      <Gallery
        {...{ widths, ratios, images }}
        lastRowBehavior="match-previous"
      />
    </div>
  );
}
