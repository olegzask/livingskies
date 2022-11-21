import { FaTemperatureLow, FaWifi, FaRegEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";

export const officeOptions = [
  {
    tintType: "VISION",
    office: true,
    linkTo: "/calculator",
    img: "/images/logos/vision2.jpg",
    description:
      "Using smart metal technology, this film rejects a significant amount of heat while allowing visible light to pass through. The smart metals add an elegant shine designed to complement exterior aesthetics.",
    brands: "Xpel",
    shades: [15, 25, 40, 70],
    features: [
      {
        name: "Reduce Interior Temperature",
        symbol: <FaTemperatureLow />,
        description:
          "VISION CLEAR VIEW PLUS helps to eliminate hot spots and reduce inconsistent temperatures throughout your home or office.",
      },
      {
        name: "UV Ray Protection",
        symbol: <BsSunFill />,
        description:
          "Count on VISION CLEAR VIEW PLUS to reject over 99% of harmful UV rays, protecting occupants & furnishings.",
      },
      {
        name: "Reduce Glare & Improve Visibility",
        symbol: <FaRegEye />,
        description:
          "Enjoy the benefits of natural sunlight along with improved outbound daytime visibility.",
      },
      {
        name: "Lower Energy Cost",
        symbol: <ImCheckmark />,
        description:
          "Make your home or office more energy efficient with VISION CLEAR VIEW PLUS installed.",
      },
    ],
  },
];
