export default {
  email: "jesse@strongtowersecurity.com",
  phone: "(480) 580-4495",
  page: {
    home: {
      servicesSummary:
        "Whether you are renting, buying or building a home in Arizona, we can help! From troubleshooting and salvaging old systems to bringing a new dream to reality, our crew specializes in solving the puzzle in the most respectful and cost-efficient way. We do what’s right for each customer, every time."
    },
    services: {
      bannerText: "WE LOVE WHAT WE DO",
      imageId: "services-img",
      servicesList: [
        {
          id: "SecuritySystems",
          name: "Security Systems",
          summary:
            "Home security should be a high priority for any home owner whether you are married, a single parent, or simply need to add an appropriate alarm system for your family’s elders.",
          text:
            "Whether it be for your home, business, rental, or personal relative, we can customize the best form of security to get you the peace of mind you are looking for.  We install reliable, user-friendly equipment and are well versed in both wired and wireless systems. Over 10 years and counting, we have installed numerous systems and guarantee our work with 24/7 technical support; Your security is our top priority.",
          imageSrc: require("../assets/stocks/security_monitoring_app.jpg"),
          imageAlt: "Security Monitoring App",
          faIcon: "fa-shield"
        },
        {
          id: "CamerasAndSurveillance",
          name: "Cameras & Surveillance",
          summary:
            "The increase in crime rates makes it necessary that each one of us take precautions of our own to keep our home and families safe. The easy and affordable access to technology has brought cameras and surveillance systems within reach for everyone.",
          text:
            "Innovation in the security camera industry has put a high quality picture in an affordable reach to everyone.  From a single camera to watch over your front porch to full perimeter and interior coverage, we will find the perfect balance for your home or business.",
          imageSrc: require("../assets/stocks/cameras_sensors.jpg"),
          imageAlt: "Cameras and Sensors",
          faIcon: "fa-video-camera"
        },
        {
          id: "MediaRoomsAndSurroundSoundSystems",
          name: "Media Rooms & Surround Sound Systems",
          summary:
            "There are many variables that can make or break or theater or media room. We can design rooms based on acoustics, aesthetics, and audio video needs. We work with architects and interior designers to make sure that every detail is perfect.",
          text:
            "This has become our most favorite work!  Using top notch equipment at a surprisingly affordable price, we love the “Wow!” our customers say after hearing their new system for the first time.  We install Surround Sound, multi-zone systems that not only consolidate all your devices, they also easily stream music from your phone or tablet.",
          imageSrc: require("../assets/stocks/hometheater_2.jpg"),
          imageAlt: "Home Theatre",
          faIcon: "fa-music"
        },
        {
          id: "TvInstallation",
          name: "TV Installation",
          summary:
            "We do it all: Wall-mount flat panel televisions, install speakers and wiring, install rack systems, install security cameras, conceal wiring inside the walls, set-up and calibrate televisions and sound systems, programming on custom remote controls, and much more…",
          text:
            "We do it all: Wall-mount flat panel televisions, install soundbars, conceal wires inside the wall, set up and calibrate televisions with sound systems and even program universal remotes.  No need to worry, we take extra precautions when working with or around your prized television.",
          imageSrc: require("../assets/stocks/tvmount_install.jpg"),
          imageAlt: "TV Mount Install",
          faIcon: "fa-television"
        },
        {
          id: "WifiSolutions",
          name: "Wifi Solutions",
          summary:
            "Relying on a single router is like asking a loud speaker in your living room to provide great sound throughout your home. It’s simple physics: WiFi waves don’t go through walls well and have an even harder time climbing stairs. Ever tried to stream a show from your bedroom when your router’s in the office downstairs? It’s a buffering nightmare.",
          text:
            "We are in a time where there’s nothing worse than trying to watch your favorite show or movie only to interrupted by it “buffering” every few minutes.  We are well aware of the headaches that troublesome wifi can cause and because of this, we have made it a priority to use the newest and most reliable products available.  Whether it is relocating the router by running hard lines to a more centralized location or installing a mesh network, we will find the solution that the cable guys aren’t willing to do.",
          imageSrc: require("../assets/stocks/Home_automation_app_1.jpg"),
          imageAlt: "Home Wifi System",
          faIcon: "fa-wifi"
        },
        {
          id: "HomeAutomation",
          name: "Home Automation",
          summary:
            "The term home automation means exactly that—automating the home and related household activities. This term encompasses a whole range of products and services ranging from the automation of lights in your home to the installation of a state-of-the art security system.",
          text:
            "The term home automation means exactly that—automating the home and related household activities. This term encompasses a whole range of products and services, such as, the automation of lights, thermostats and video streaming doorbells.",
          imageSrc: require("../assets/stocks/home_automation_app_2.jpg"),
          imageAlt: "Home Automation app",
          faIcon: "fa-magic"
        }
      ]
    },
    about: {},
    testimonials: {
      bannerText: "WHAT PEOPLE ARE SAYING",
      imageId: "testimonials-img"
    },
    contact: {
      bannerText: "LET'S GET IN TOUCH",
      imageId: "testimonials-img"
    }
  },
  component: {
    footer: {
      contact: {
        headerText: "CONTACT",
        googleMapLink:
          "https://www.google.com/maps/place/Gilbert,+AZ+85295/@33.3007877,-111.7538555,14z/data=!3m1!4b1!4m5!3m4!1s0x872bac6615ba7ac3:0x6c67e61e58ed8985!8m2!3d33.3073768!4d-111.7435799",
        locationText: "Gilbert, Arizona 85295",
        email: {
          subject: "Hello Strong Tower Installations",
          intro: "Hello Strong Tower Installations,",
          body: `Please contact me. I’m interested in learning more.`,
          outro: "Thank you,"
        }
      },
      about: {
        headerText: "ABOUT US",
        summary:
          "We are insightful creators and builders who offer innovative solutions in alarms, cameras, home automation, and surround sound. Our mission is to install the latest and greateast technologies to deliver extraordinary value and security for you and your family."
      }
    },
    partners: {
      headerText: "OUR PARTNERS"
    }
  }
};
