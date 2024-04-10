import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { AiFillStar, AiTwotoneDislike } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";
import ExpandText from "../common/ExpandText";
import Ratings from "../common/Ratings";

const ReviewAndRating = ({ productId, rating, mutate }: { productId: string; rating: any; mutate: () => void }) => {
  const [open, setOpen] = useState(false)
  const { user } = useAuth()
  const IMAGE_ARR = [
    {
      id: "1",
      image: "/home/p-1.png",
    },
    {
      id: "2",
      image: "/home/p-1.png",
    },
    {
      id: "3",
      image: "/home/p-1.png",
    },
    {
      id: "4",
      image: "/home/p-1.png",
    },
    {
      id: "5",
      image: "/home/p-1.png",
    },
    {
      id: "6",
      image: "/home/p-1.png",
    },
    {
      id: "7",
      image: "/home/p-1.png",
    },
    {
      id: "8",
      image: "/home/p-1.png",
    },
    {
      id: "9",
      image: "/home/p-1.png",
    },
    {
      id: "10",
      image: "/home/p-1.png",
    },
    {
      id: "11",
      image: "/home/p-1.png",
    },
    {
      id: "12",
      image: "/home/p-1.png",
    },
    {
      id: "13",
      image: "/home/p-1.png",
    },
    {
      id: "14",
      image: "/home/p-1.png",
    },
    {
      id: "15",
      image: "/home/p-1.png",
    },
    {
      id: "16",
      image: "/home/p-1.png",
    },
    {
      id: "6",
      image: "/home/p-1.png",
    },
    {
      id: "7",
      image: "/home/p-1.png",
    },
    {
      id: "8",
      image: "/home/p-1.png",
    },
    {
      id: "9",
      image: "/home/p-1.png",
    },
    {
      id: "10",
      image: "/home/p-1.png",
    },
    {
      id: "11",
      image: "/home/p-1.png",
    },
    {
      id: "12",
      image: "/home/p-1.png",
    },
    {
      id: "13",
      image: "/home/p-1.png",
    },
    {
      id: "14",
      image: "/home/p-1.png",
    },
    {
      id: "15",
      image: "/home/p-1.png",
    },
    {
      id: "16",
      image: "/home/p-1.png",
    },
  ];


  const visibleImages = IMAGE_ARR.slice(0, 4);
  const remainingImageCount = IMAGE_ARR.length - visibleImages.length;

  const [reviews, setReviews] = useState(rating?.rating);
  const [showMore, setShowMore] = useState(1);

  const handleLike = (index: number) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].likeCount += 1;
    setReviews(updatedReviews);
  };

  const handleDislike = (index: number) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].dislikeCount += 1;
    setReviews(updatedReviews);
  };



  return (
    <>
      <Ratings open={open} close={() => setOpen(false)} productId={productId} mutate={mutate} />
      <div
        id="ReviewAndRating"
        className="w-full h-full border flex flex-col gap-5 rounded-md"
      >
        <div className="px-4 py-2 flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">
            Ratings & Reviews
          </span>
          <p
            onClick={() => {
              if (user?._id) {
                setOpen(true)
                return
              }
              toast.info("Please login first then give review")
            }}
            className="px-6 py-2 rounded-md shadow-md cursor-pointer text-gray-800 font-semibold"
          >
            Rate Product
          </p>
        </div>
        <div className="w-full px-4 grid lg:flex grid-cols-2 gap-5 items-center">
          <div className="flex flex-col gap-2 md:w-[30%] items-center ">
            <p className="flex items-center gap-1 text-3xl text-gray-800 font-semibold">
              <span>{rating?.star}</span>
              <span>
                <AiFillStar className=" text-amber-500" />
              </span>
            </p>
            <p className="text-sm text-center text-gray-400">
              {rating?.ratings} Ratings & Reviews
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <span className="flex items-center gap-1 text-xs">
                5<AiFillStar className=" text-amber-500" />
              </span>
              <div className="relative w-32 bg-gray-200 rounded-full h-[0.28rem]">
                <p className="absolute left-0 top-0 h-full w-full bg-green-600 rounded-full"></p>
              </div>
              <span className="text-gray-500 text-xs">9,257</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="flex items-center gap-1 text-xs">
                4<AiFillStar className=" text-amber-500" />
              </span>
              <div className="relative w-32 bg-gray-200 rounded-full h-[0.28rem]">
                <p className="absolute left-0 top-0 h-full w-10 bg-green-600 rounded-full"></p>
              </div>
              <span className="text-gray-500 text-xs">1,343</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="flex items-center gap-1 text-xs">
                3<AiFillStar className=" text-amber-500" />
              </span>
              <div className="relative w-32 bg-gray-200 rounded-full h-[0.28rem]">
                <p className="absolute left-0 top-0 h-full w-6 bg-green-600 rounded-full"></p>
              </div>
              <span className="text-gray-500 text-xs">210</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="flex items-center gap-1 text-xs">
                2<AiFillStar className=" text-amber-500" />
              </span>
              <div className="relative w-32 bg-gray-200 rounded-full h-[0.28rem]">
                <p className="absolute left-0 top-0 h-full w-2 bg-orange-600 rounded-full"></p>
              </div>
              <span className="text-gray-500 text-xs">82</span>
            </div>

            <div className="flex gap-1 items-center">
              <span className="flex items-center gap-1 text-xs ">
                1<AiFillStar className=" text-amber-500 ml-1" />
              </span>
              <div className="relative w-32 bg-gray-200 rounded-full h-[0.28rem]">
                <p className="absolute left-0 top-0 h-full w-8 bg-red-600 rounded-full"></p>
              </div>
              <span className="text-gray-500 text-xs">355</span>
            </div>
          </div>
          {/* <p className=" hidden lg:block h-20 w-0.5 bg-gray-300"></p>
        <div className="relative w-full  grid grid-cols-4 items-center gap-3 col-span-2">
          {visibleImages.map((item) => (
            <img
              key={item.id}
              src={item.image}
              className="w-24 h-20 object-contain rounded-md p-2 border-2 "
              alt=""
            />
          ))}

          {modalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ">
              <div className="bg-white p-4 rounded-md shadow-lg md:w-[50rem] w-full h-[30rem] overflow-y-auto relative">
                <button
                  className=" absolute top-0 right-0 z-[555] text-black"
                  onClick={closeModal}
                >
                  <MdOutlineCancel className=" text-5xl" />
                </button>
                <div className="grid grid-cols-4 gap-2">
                  {IMAGE_ARR.map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt=""
                      className="w-full h-24 object-contain rounded-md p-2 border-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {!modalOpen && IMAGE_ARR.length > 8 && (
            <button
              onClick={openModal}
              className="absolute top-0 2xl:-right-12 xl:-right-10 -right-9 transform -translate-x-1/2 mb-2 2xl:w-24 w-20  h-20  text-white  rounded-md p-1 bg-black bg-opacity-70  border-2 flex items-center justify-center"
            >
              +{remainingImageCount}
            </button>
          )}
        </div> */}
        </div>

        <hr />
        {rating?.rating?.slice(0, showMore)?.map((item: any, index: number) => {
          return (
            <div key={item._id} className="">
              <div className=" w-full flex flex-col gap-4 px-4 pb-4">
                <p className=" flex gap-4 items-center">
                  <span className={`flex items-center text-white  px-2 py-0.5 rounded text-sm ${item?.start <= 1 ? `bg-red-500` : item?.start < 4 ? `bg-orange-500 ` : `bg-green-600`}`}>
                    {item.star}
                    <AiFillStar />
                  </span>
                  <span className=" font-semibold text-sm">{item.title}</span>
                </p>
                <ExpandText text={item.msg} limit={20} />
                <p className=" flex gap-1 items-center relative md:hidden">
                  {
                    item?.images && item?.images?.length > 4 && <span className=" absolute top-1 right-5 w-14 h-14 bg-black rounded-md bg-opacity-70 cursor-pointer md:hidden flex items-center justify-center text-white font-semibold tracking-wide text-xs ">View</span>
                  }

                  {item?.images?.slice(0, 4)?.map((imgItem: any) => {
                    return (
                      <img
                        key={imgItem._id}
                        src={imgItem.imageUrl}
                        className=" w-16 h-16 object-contain p-2 border rounded-md"
                        alt=""
                      />
                    );
                  })}
                </p>
                <p className=" md:flex hidden gap-1 items-center ">


                  {item?.images?.map((imgItem: any) => {
                    return (
                      <img
                        key={imgItem._id}
                        src={imgItem.imageUrl}
                        className=" w-16 h-16 object-contain p-2 border rounded-md"
                        alt=""
                      />
                    );
                  })}
                </p>
                <div className=" flex flex-col md:flex-row md:items-center gap-3 justify-between">
                  <div className=" flex items-center gap-2 text-xs text-gray-600">
                    <p className=" font-semibold">{item.user?.name}</p>
                    <p className=" flex items-center ">
                      <BsFillCheckCircleFill className=" text-green-600" />{" "}
                      <span>Certified Buyer, {item.address}</span>
                    </p>
                    <p className=" font-semibold">5 months ago</p>
                  </div>
                  <div className=" flex items-center gap-5  text-lg text-gray-800">
                    <p className=" flex items-center gap-3">
                      <BiSolidLike
                        onClick={() => handleLike(index)}
                        className=" cursor-pointer"
                      />
                      <span className=" text-sm font-semibold text-gray-600">
                        {item.like}
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <AiTwotoneDislike
                        onClick={() => handleDislike(index)}
                        className=" cursor-pointer"
                      />
                      <span className=" text-sm font-semibold text-gray-600">
                        {item.dislike}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        {showMore === 1 && (
          <button
            onClick={() => setShowMore(rating?.rating?.length)}
            className="p-3 text-blue-500 cursor-pointer hover:underline font-semibold text-left"
          >
            Show all of {rating?.rating?.length} reviews.
          </button>
        )}
        {showMore > 1 && (
          <button
            onClick={() => setShowMore(1)}
            className="p-3 text-blue-500 cursor-pointer hover:underline font-semibold text-left"
          >
            Show less
          </button>
        )}
      </div>
    </>
  );
};

export default ReviewAndRating;
