import React, { useState } from "react";
import Image from "next/image";

// import { useDebounce } from "use-debounce";
import { usePrepareSendTransaction } from "wagmi";

interface Props {
  title: string;
  creator: string;
  description: string;
  group: string;
  isCompleted: boolean;
}

const QuestCard: React.FC<Props> = (props) => {
  // const [donationAmount, setDonationAmount] = useState<string>("");
  // const [buttonText, setButtonText] = useState<string>("Apply");

  // const handleDonate = () => {
  //   setButtonText("Donated!");
  //   setDonationAmount("");
  // };

  return (
    <div>
      <div
        className={`card w-96 bg-base-100 shadow-xl ${
          props.isCompleted ? "shadow-green-200" : "shadow-red-200"
        } `}
      >
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="line-clamp-4">{props.description}</p>
          <p>{"Group: " + props.group}</p>
          <div className="card-actions justify-between mt-4 items-center">
            <button
              disabled={props.isCompleted}
              className="btn btn-primary"
              onClick={() => {}}
            >
              {props.isCompleted ? "Completed" : "Mint"}
            </button>
            {props.isCompleted && (
              <a href="/nft.jpg" target="_blank">
                <Image
                  className="rounded-lg"
                  src="/nft.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
