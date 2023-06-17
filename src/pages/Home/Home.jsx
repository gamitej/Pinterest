import { useEffect, useState } from "react";
import logo from "../../assests/img.jpg";
import { CircularProgress } from "@mui/material";
import moment from "moment";

const Home = () => {
  const data = {
    content: [
      {
        name: "1",
        imagePath: logo,
        id: "1",
        username: "anupam",
        created: "01-22-2023",
        hashtags: "",
        caption: "q",
      },
      {
        name: "2",
        imagePath: logo,
        id: "2",
        username: "amitej",
        created: "01-22-2023",
        hashtags: "",
        caption: "q",
      },
      {
        name: "3",
        imagePath: logo,
        id: "3",
        username: "adarsh",
        created: "01-22-2023",
        hashtags: "",
        caption: "q",
      },
      {
        name: "4",
        imagePath: logo,
        id: "4",
        username: "pagal",
        created: "01-22-2023",
        hashtags: "",
        caption: "q",
      },
    ],
  };

  // ========= STATES =============

  const [show, setShow] = useState({ hide: false, id: "" });
  // const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleMouseEvent = (id) => {
    setShow({ hide: true, id });
  };

  const handleDate = (date) => {
    const newDate = moment(date).format("DD-MM-YYYY");
    return newDate;
  };

  // ========= CALL ALL PINS API =============

  useEffect(() => {
    const callHomeApi = async () => {
      setLoading(true);
      const data = await getAllPins();
      // setData(data);
      setLoading(false);
    };
    // callHomeApi();
  }, []);

  return (
    <div className="mt-8">
      <p className="text-[2rem] font-semibold text-slate-500 text-center p-2 mb-4">
        Explore More{" "}
      </p>
      {loading && (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="flex flex-col justify-center items-center gap-y-2 h-[60vh]">
            <CircularProgress />
            <p className="font-semibold text-slate-400">
              loading pinterests...
            </p>
          </div>
        </div>
      )}
      {!loading && (
        <div className="flex justify-center items-center">
          <div className="grid  grid-cols-1 lg:grid-cols-6  md:grid-cols-4 gap-10 w-[80%] ">
            {data?.content?.map(
              ({ username, imagePath, created, id, caption }) => (
                <div
                  key={id}
                  className="col-span-2 bg-blue-50 rounded-2xl shadow-md cursor-pointer"
                  onMouseEnter={() => handleMouseEvent(id)}
                  onMouseLeave={() => setShow({ hide: false, id: "" })}
                >
                  <div>
                    <div className="relative">
                      <img
                        src={imagePath}
                        alt="logo"
                        className="rounded-2xl h-[20rem] opacity-[0.5] hover:opacity-[1]"
                        loading="lazy"
                      />
                      <div
                        className="absolute top-1 p-2"
                        style={{
                          display: show.hide && show.id === id ? "" : "none",
                        }}
                      >
                        <p className="text-xl font-semibold capitalize text-white">
                          {username}
                        </p>
                      </div>
                      <div className="absolute top-1 right-2 p-2">
                        <p className="text-xl font-semibold capitalize text-white">
                          {handleDate(created)}
                        </p>
                      </div>
                      <div className="absolute bottom-1 left-2 p-2">
                        <p className="text-xl font-semibold text-white">
                          #{caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
