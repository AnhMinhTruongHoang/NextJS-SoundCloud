import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequest } from "@/unity/api";

///////////////////
export default async function HomePage() {
  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });
  const workout = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  });
  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  });

  return (
    <Container>
      <MainSlider title={"Top Chill"} data={chills?.data ? chills.data : []} />
      <MainSlider
        title={"Top Workout"}
        data={workout?.data ? workout.data : []}
      />
      <MainSlider title={"Top Party"} data={party?.data ? party.data : []} />
    </Container>
  );
}
