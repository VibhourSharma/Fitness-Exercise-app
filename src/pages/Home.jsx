import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setexercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
      />
      <Exercises
        setexercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
      />
    </Box>
  );
};

export default Home;
