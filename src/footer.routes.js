// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/tempiltin.png";

const date = new Date().getFullYear();

export default {
  brand: {
    // name: "Tempiltin UZ",
    // image: logoCT,
    // route: "/",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/TemurbekShukurov0707/",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/tempiltin",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/tempiltin",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/tempiltin",
    // },
  ],
  menus: [
    // {
    //   name: "Sahifalar",
    //   items: [
    //     { name: "Haqida", href: "https://www.twmpiltin.uz/pages/route/haqida" },
    //     { name: "Kontakt", href: "https://www.twmpiltin.uz/pages/route/kontakt" },
    //     { name: "Muallif", href: "https://www.twmpiltin.uz/pages/route/muallif" },
    //   ],
    // },
    // {
    //   name: "resources",
    //   items: [
    //     { name: "illustrations", href: "#!" },
    //     { name: "bits & snippets", href: "#!" },
    //     { name: "affiliate program", href: "#!" },
    //   ],
    // },
    // {
    //   name: " ",
    //   items: [
    //     { name: "", href: "" },
    //     { name: "", href: "" },
    //     { name: "", href: "" },
    //     { name: "", href: "" },
    //   ],
    // },
 
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      From 2021 to {date} &copy; Created by Tempiltin UZ{" "}
      <MKTypography
        component="a"
        href="https://www.tempiltin.uz"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
      </MKTypography>
      .
    </MKTypography>
  ),
};
