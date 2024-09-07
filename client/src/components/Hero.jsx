// import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       imgSrc:
//         "https://www.shutterstock.com/image-photo/delicious-grilled-burgers-600nw-1146199442.jpg",
//       label: "Ultimate Burger Bliss",
//       caption: "“Discover the Best Burgers Around the World.”",
//     },
//     {
//       imgSrc:
//         "https://media.istockphoto.com/id/1190771420/photo/japanese-cuisine-set-with-classic-nigiri-sushi-fusion-hot-uramaki-philadelphia-and-unagi.jpg?s=612x612&w=0&k=20&c=8c_UOO_2EVQ2aI-LDMGZAKU5kGr7Ve7jOeb1avo7N0k=",
//       label: "Sushi Sensations",
//       caption: "“Experience Authentic Japanese Cuisine.”",
//     },
//     {
//       imgSrc: "https://static.toiimg.com/photo/65783757.cms",
//       label: "Street Food Extravaganza",
//       caption: "“Explore Local Food Markets and Street Eats.”",
//     },
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-screen-xl mx-auto px-8">
//         <div className="relative w-full overflow-hidden rounded-xl shadow-md">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="w-full flex-shrink-0 relative">
//                 <img
//                   src={slide.imgSrc}
//                   style={{ width: "1200px", height: "400px" }}
//                   className="w-full h-96 object-cover"
//                   alt={slide.label}
//                 />

//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
//                   <h5 className="text-2xl font-semibold mb-2">{slide.label}</h5>
//                   <p className="text-lg">{slide.caption}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Controls */}
//           <button
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
//             onClick={handlePrev}
//             aria-label="Previous"
//           >
//             &lt;
//           </button>
//           <button
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
//             onClick={handleNext}
//             aria-label="Next"
//           >
//             &gt;
//           </button>
//           {/* Indicators */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentIndex === index
//                     ? "bg-white"
//                     : "bg-white bg-opacity-50 hover:bg-opacity-75"
//                 }`}
//                 onClick={() => setCurrentIndex(index)}
//                 aria-label={`Slide ${index + 1}`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      imgSrc:
        "https://www.shutterstock.com/image-photo/delicious-grilled-burgers-600nw-1146199442.jpg",
      label: "Ultimate Burger Bliss",
      caption: "Discover the Best Burgers Around the World.",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/1190771420/photo/japanese-cuisine-set-with-classic-nigiri-sushi-fusion-hot-uramaki-philadelphia-and-unagi.jpg?s=612x612&w=0&k=20&c=8c_UOO_2EVQ2aI-LDMGZAKU5kGr7Ve7jOeb1avo7N0k=",
      label: "Sushi Sensations",
      caption: "Experience Authentic Japanese Cuisine.",
    },
    {
      imgSrc: "https://static.toiimg.com/photo/65783757.cms",
      label: "Street Food Extravaganza",
      caption: "Explore Local Food Markets and Street Eats.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="relative w-full overflow-hidden rounded-xl shadow-md">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={slide.imgSrc}
                  alt={slide.label}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                  <h5 className="text-2xl font-semibold mb-2">{slide.label}</h5>
                  <p className="text-lg">{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Controls */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
            onClick={handlePrev}
            aria-label="Previous"
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
            onClick={handleNext}
            aria-label="Next"
          >
            &gt;
          </button>
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
