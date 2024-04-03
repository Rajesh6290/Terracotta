import Link from "next/link";
import React, { useState } from "react";
import { AiFillStar, AiTwotoneDislike } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import ExpandText from "../common/ExpandText";

const ReviewAndRating = () => {
  const REVIEW_ARR = [
    {
      id: "1",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-1.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-2.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-3.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "2",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-2.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-3.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-1.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "3",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-1.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-1.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-1.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "4",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-2.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-2.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-2.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "5",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-3.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-3.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-3.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "6",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-1.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-1.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-1.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "7",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-2.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-2.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-2.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
    {
      id: "8",
      rating: "4",
      title: "Good choice",
      subtitle: "Value for money product...",
      desc: "But no one said this major issue on every mac. If I touch or rub the mac body while charging, I can feel some electric sensation passing through my body.. when I searched about the issue, this issue has existed for the last 10 years on all mac devices because of 2 pin chargers without ground. This issue can be resolved only with a 3 pin charger with ground. This issue should be resolved by mac providing 3 pin charger but they didn't care about this issue. We should...",
      name: "Shankar G",
      address: "Chennai",
      // images: [
      //   {
      //     id: "1",
      //     image: "/home/p-4.png",
      //   },
      //   {
      //     id: "12",
      //     image: "/home/p-4.png",
      //   },
      //   {
      //     id: "3",
      //     image: "/home/p-4.png",
      //   },
      // ],
      likeCount: 0, // Add this property
      dislikeCount: 0, // Add this property
    },
  ];
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

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const visibleImages = IMAGE_ARR.slice(0, 4);
  const remainingImageCount = IMAGE_ARR.length - visibleImages.length;

  const [reviews, setReviews] = useState(REVIEW_ARR);
  const [showMore, setShowMore] = useState(false);

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

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const visibleReviews = showMore ? reviews : reviews.slice(0, 1);
  return (
    <div
      id="ReviewAndRating"
      className="w-full h-full border flex flex-col gap-5 rounded-md"
    >
      <p className="px-4 py-2 flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-800">
          Ratings & Reviews
        </span>
        <Link
          href="#"
          className="px-6 py-2 rounded-md shadow-md cursor-pointer text-gray-800 font-semibold"
        >
          Rate Product
        </Link>
      </p>
      <div className="w-full px-4 grid lg:flex grid-cols-2 gap-5 items-center">
        <div className="flex flex-col gap-2 md:w-[30%] items-center ">
          <p className="flex items-center gap-1 text-3xl text-gray-800 font-semibold">
            <span>3.7</span>
            <span>
              <AiFillStar className=" text-amber-500" />
            </span>
          </p>
          <p className="text-sm text-center text-gray-400">
            11,247 Ratings &966 Reviews
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
      {visibleReviews.map((item, index) => {
        return (
          <div key={item.id} className="">
            <div className=" w-full flex flex-col gap-4 px-4 pb-4">
              <p className=" flex gap-4 items-center">
                <span className=" flex items-center text-white bg-green-600 px-2 py-0.5 rounded text-sm">
                  {item.rating}
                  <AiFillStar />
                </span>
                <span className=" font-semibold text-sm">{item.title}</span>
              </p>
              <p className=" text-gray-500 text-sm">{item.subtitle}</p>
              <ExpandText text={item.desc} limit={20} />
              {/* <p className=" flex gap-1 items-center">
                {item.images.map((imgItem) => {
                  return (
                    <img
                      key={imgItem.id}
                      src={imgItem.image}
                      className=" w-16 h-16 object-contain p-2 border rounded-md"
                      alt=""
                    />
                  );
                })}
              </p> */}
              <div className=" flex flex-col md:flex-row md:items-center gap-3 justify-between">
                <div className=" flex items-center gap-2 text-xs text-gray-600">
                  <p className=" font-semibold">{item.name}</p>
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
                      {item.likeCount}
                    </span>
                  </p>
                  <p className=" flex items-center gap-3">
                    <AiTwotoneDislike
                      onClick={() => handleDislike(index)}
                      className=" cursor-pointer"
                    />
                    <span className=" text-sm font-semibold text-gray-600">
                      {item.dislikeCount}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      {!showMore && reviews.length > 1 && (
        <button
          onClick={toggleShowMore}
          className="p-3 text-blue-500 cursor-pointer hover:underline font-semibold text-left"
        >
          Show all of {reviews.length} reviews.
        </button>
      )}
      {showMore && (
        <button
          onClick={toggleShowMore}
          className="p-3 text-blue-500 cursor-pointer hover:underline font-semibold text-left"
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default ReviewAndRating;
