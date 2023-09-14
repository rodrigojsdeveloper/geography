import { CountryContext } from "../contexts/country.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiSkipNextCircle } from "react-icons/bi";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ICountry } from "../interfaces";
import * as yup from "yup";

const Answer = ({ country }: ICountry) => {
  const { favorites, count, setCount } = useContext(CountryContext);

  const [message, setMessage] = useState<boolean>(false);

  const [nextCountry, setNextCountry] = useState<boolean>(false);

  const [nextMessage, setNextMessage] = useState<string>("");

  const schema = yup.object().shape({
    name: yup.string().required("Digite o nome do país"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    const findFav = favorites.find(
      (favorite) =>
        favorite.name.common.toLowerCase() == data.name.toLowerCase()
    );

    if (!findFav) {
      setCount((prevCount) => {
        const updatedCount = prevCount - 1;
        if (updatedCount === 0) {
          setNextCountry(true);
          setNextMessage(
            `No more trying! The name of this country is ${country?.name?.common}`
          );
        }
        return updatedCount;
      });

      setMessage(true);
      setNextCountry(false);
      setNextMessage("Incorrect Answer!");
    } else {
      setMessage(false);
      setNextCountry(true);
    }
  };

  return (
    <div className="w-full max-w-470 max-1024:mt-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl mr-1.5">{count}</span>
          <p className="font-medium text-base">Remaining attempts</p>
        </div>

        {nextCountry ? (
          <BiSkipNextCircle
            size={28}
            className="cursor-pointer"
            onClick={() => console.log("aa")}
          />
        ) : (
          <BiSkipNextCircle
            size={28}
            className="opacity-60 cursor-not-allower"
          />
        )}
      </div>

      <form className="mt-10" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="flex flex-col mb-6">
          <label className="font-medium text-sm mb-3">Respond</label>
          <input
            className="w-full h-45 bg-grey-2 p-3 outline-none placeholder:focus:text-transparent"
            placeholder="Enter the answer"
            autoComplete="off"
            {...register("name")}
          />

          {message ? (
            <p className="font-medium text-sm text-red pt-6">{nextMessage}</p>
          ) : count === 0 ? (
            <p className="font-medium text-sm text-orange pt-6">
              {nextMessage}
            </p>
          ) : null}
        </div>

        <button
          className="w-full h-40 bg-primary-color-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={count === 0 ? true : false}
        >
          To check
        </button>
      </form>
    </div>
  );
};

export { Answer };
