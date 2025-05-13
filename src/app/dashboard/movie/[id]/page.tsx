import { SimpleMovieResponse } from "@/components/movies";
import { BackButton } from "@/components/movies/components/BackButton";
import { Metadata } from "next";
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const responseMovie = await getMovie(params.id);
    const { Title } = responseMovie;

    return {
      title: Title,
      description: `Pelicula Online ${Title}`,
    };
  } catch (error) {
    return {
      title: "Movie",
      description: "Description movie",
    };
  }
}

const getMovie = async (id: string): Promise<SimpleMovieResponse> => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=31c47d20&i=${id}`
  );
  return response.json();
};

export default async function MoviesPage({ params }: Props) {
  const responseMovie = await getMovie(params.id);
  const { Title, Poster, Plot, Metascore, Released, Director, Runtime, Type } =
    responseMovie;

  return (
    <div className="flex flex-col items-center text-slate-800 pb-2  h-full bg-gradient-to-t from-stone-200 to-zinc-500 w-full">
      <div className={"relative w-full h-auto px-4"}>
        <BackButton />

        <div className="absolute">
          <div className="flex flex-wrap w-full justify-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <div>
                <Image src={Poster} width={180} height={150} alt={Title} />

                <button className="flex bg-yellow-400 w-full text-sm mt-1 font-semibold p-2 align-middle items-center gap-2 rounded-s-sm text-center justify-center">
                  <span>Trailer Oficial</span>
                  <IoPlayOutline size={15} />
                </button>
              </div>
            </div>

            <div className="pb-3 text-gray-950 max-w-screen-sm text-xl font-bold capitalize ">
              <h1 className="">{`${Title} (${Released})`}</h1>
              <div className="w-full justify-between font-light text-xs">
                <span>Duration: </span> <span>{Runtime}h</span>
              </div>
              <h1 className="text-xl mt-4">OverView</h1>
              <p className=" text-sm mt-1 font-light sm:pr-10">{Plot}</p>

              <div className="flex flex-wrap items-center gap-1 mt-4">
                <span className="text-sm">Score: </span>
                <span className="text-sm font-light">{Metascore}</span>
              </div>

              <div className="flex flex-wrap items-center gap-1 mt-1">
                <span className="text-sm">Season: </span>
                <span className="text-sm font-light">{Director}</span>
              </div>

              <div className="items-center mt-1">
                <span className="text-sm">categories: </span>

                <div className="flex flex-wrap font-normal mt-2">
                  <div className="mr-2 capitalize px-5 py-2 m-0 rounded-lg border border-none text-white bg-gray-500 text-xs">
                    {Type}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
