import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NotFound from "../components/ui/NotFound";
import Title from "../components/ui/Title";
import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";


const BASE_URL = import.meta.env.VITE_HOST

const ManagementTeamsMessage = () => {
  const { management } = useParams();
  const [data, setData] = useState(null);


  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/managements-message/${management}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('Error',error.message);
        if (error.response.status) setData("404");
      });
  }, [management]);

  if (data == "404") {
    return <NotFound />;
  }
  if (!data) {
  return <div>Something Went wrong</div>
}

  return (
    <div>
      <Title title={data.title} />
      <Container>
        <Heading>
          <span className="capitalize">{data.title}</span>
        </Heading>
        <div className="flex flex-col md:flex-row gap-5">
          <div className=" px-5">
            <img
              className="mx-auto w-[18rem] md:w-[80rem] h-auto"
              src={data.image}
              alt={data.name}
            />
            <p className="font-semibold text-xl my-4 md:my-8 text-center">
              {data.name}
            </p>
          </div>
          <div className="space-y-8 text-base">
            {data?.messages?.map((message, idx) => (
              <p key={idx}>{message}</p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManagementTeamsMessage;
