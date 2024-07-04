import reviewImg from "./public/images/reviewer-img.png";
import reviewStarImg from "./public/images/rating-star.png";
import userCentricImg from "./public/images/userCentric.png";
import innovateImg from "./public/images/bulb-img.png";
import positiveImg from "./public/images/think-img.png";
const data = {
  workingSteps: [
    {
      stepNumber: 1,
      title: "Download App",
      description: "Download App either for Windows, Mac or Android",
    },
    {
      stepNumber: 2,
      title: "Create account",
      bodyTitle: "14 days free trial",
      description: "Sign up free for App account. One account for all devices.",
    },
    {
      stepNumber: 3,
      title: "It’s done, enjoy the app",
      bodyTitle: "Have any questions check our FAQs",
      description: "Get most amazing app experience,Explore and share the app",
    },
  ],
  reviewData: [
    {
      reviewerImg: reviewImg,
      reviewerName: "Debbie Hagenes",
      reviewersReview:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      starImg: reviewStarImg,
      starValue: "5.0 rating",
    },
    {
      reviewerImg: reviewImg,
      reviewerName: "Debbie Hagenes",
      reviewersReview:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      starImg: reviewStarImg,
      starValue: "5.0 rating",
    },
    {
      reviewerImg: reviewImg,
      reviewerName: "Debbie Hagenes",
      reviewersReview:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      starImg: reviewStarImg,
      starValue: "5.0 rating",
    },
    {
      reviewerImg: reviewImg,
      reviewerName: "Debbie Hagenes",
      reviewersReview:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      starImg: reviewStarImg,
      starValue: "5.0 rating",
    },
    {
      reviewerImg: reviewImg,
      reviewerName: "Debbie Hagenes",
      reviewersReview:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      starImg: reviewStarImg,
      starValue: "5.0 rating",
    },
  ],

  attributeData: [
    {
      cardIcon: userCentricImg,
      cardTitle: "User-Centric",
      cardDescription:
        "Designed with the end-user in mind, Pillaxia is intuitive and easy to navigate, making it accessible to individuals of all ages.",
    },
    {
      cardIcon: innovateImg,
      cardTitle: "Innovative",
      cardDescription:
        "Pillaxia leverages cutting-edge technology through AI-driven reminders and real-time tracking to simplify medication management.",
    },
    {
      cardIcon: positiveImg,
      cardTitle: "Positive Health Outcomes",
      cardDescription: "By improving medication adherence, Pillaxia directly contributes to better health outcomes.",
    },
  ],
};

export default data