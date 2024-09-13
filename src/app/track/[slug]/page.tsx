"use client";
import WaveTrack from "@/components/tracks/waveTrack";
import { useSearchParams } from "next/navigation";

const DetailTrackPage = (props: any) => {
  const { params } = props;
  const searchParams = useSearchParams();
  const search = searchParams.get("audio");
  console.log("check params", search);
  return (
    <>
      <div>
        <WaveTrack />
      </div>
    </>
  );
};

export default DetailTrackPage;
