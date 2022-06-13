import React from "react";
import Main from "../components/contactUs/Main";
import HeroImage from "../components/HeroImage";

function ContactUs() {
  return (
    <div>
      <HeroImage text="聯繫我們" />
      <iframe
        id="contact-us-map"
        className="w-full px-32 bg-white-smoke h-[480px]"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=zh-TW&amp;q=台灣台中市霧峰區峰北路666號&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <Main />
    </div>
  );
}

export default ContactUs;
