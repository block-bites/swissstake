import React, { useEffect, useRef } from "react";

const PrivacyPolicy = ({ isOpen, onClose }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="privacy-policy-positioner">
      <div className="privacy-policy-content" ref={ref}>
        <button className={"privacy-policy-content--button"} onClick={onClose}>
          X
        </button>
        <div>
          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              Privacy Policy for SwissStake.com
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              At SwissStake, accessible from https://SwissStake.com, one of our
              main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by SwissStake.com and how we use it. If you have
              additional questions or require more information about our Privacy
              Policy, do not hesitate to contact us. This Privacy Policy applies
              only to our online activities and is valid for visitors to our
              website with regards to the information that they shared and/or
              collect in SwissStake.com. This policy is not applicable to any
              information collected offline or via channels other than this
              website
            </p>
          </div>
          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">Consent </h4>
            <p className="privacy-policy-content__text--subtitle">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>
          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              Information we collect
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information. If
              you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide. When you register
              for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and
              telephone number.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              How we use your information
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              1. Provide, operate, and maintain our website <br /> 2. Improve,
              personalize, and expand our website <br /> 3. Understand and
              analyze how you use our website
              <br /> 4. Develop new products, services, features, and
              functionality
              <br /> 5. Communicate with you, either directly or through one of
              our partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes <br /> 6. Send you emails{" "}
              <br /> 7. Find and prevent fraud
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">Log Files </h4>
            <p className="privacy-policy-content__text--subtitle">
              SwissStake.com follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              Cookies and Web Beacons
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              Like any other website, SwissStake.com uses 'cookies'. These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              Advertising Partners Privacy Policies
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of SwissStake.com.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on SwissStake.com,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              Note that SwissStake.com has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              Third Party Privacy Policies
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              SwissStake.com's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p className="privacy-policy-content__text--subtitle">
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              GDPR Data Protection Rights
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p className="privacy-policy-content__text--subtitle">
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>

          <div className="privacy-policy-content__text">
            <h4 className="privacy-policy-content__text--title">
              Children's Information
            </h4>
            <p className="privacy-policy-content__text--subtitle">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="privacy-policy-content__text--subtitle">
              SwissStake.com does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
