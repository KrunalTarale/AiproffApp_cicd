import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import image from '../assets/Article1/logo.png';
import './Legal.css';
const Legal = () => {
  return (
    <div className="Legal">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xl mx-auto space-y-12  p-8 my-20">
        <h1 className="lg:text-5xl text-4xl font-bold">
          AiProff.ai Legal Terms
        </h1>
        <p> Last Updated Date: 10 October 2023</p>
        <div className="lg:text-xl text-lg space-y-12">
          <p>
            Welcome to AiProff.ai. These Legal Terms ("Terms") govern your use
            of AiProff’s website and services provided by AiProff.ai. By
            accessing or using our website and services, you agree to comply
            with and be bound by these Terms. If you do not agree with these
            Terms, please refrain from using our website and services. For any
            other assistance, reach out to our concerned team as highlighted in
            the section 10 of this Legal Terms page.
          </p>
          <div className="flex items-center justify-center">
            <img src={image} className="max-h-[25rem]" />
          </div>
          <h1 className="lg:text-4xl text-3xl font-bold">
            1. Ownership and Copyright
          </h1>
          <p>
            All content, materials, and functionality on the AiProff.ai website,
            including but not limited to text, graphics, logos, icons, images,
            videos, software, algorithms, models, processes, and industry
            perspectives (collectively referred to as "Content") are the
            exclusive property of AiProff.ai or its licensors, unless mentioned
            otherwise. The Content is protected by copyright laws in India and
            internationally. You may not copy, reproduce, modify, reverse
            engineer, distribute, transmit, or otherwise use the Content without
            our written permission, except as specified in Section 3.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">2. Trademarks</h1>
          <p>
            The trademarks and service marks displayed on the AiProff.ai website
            are registered and unregistered trademarks of AiProff.ai and its
            licensors. You agree not to use or reproduce these trademarks
            without our prior written consent from our official representative.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">
            3. Permitted Use of Site Content
          </h1>
          <p>
            AiProff.ai grants limited, non-exclusive, non-transferable,
            revocable licence to access, download, display, and print one copy
            of the Content to specific registered users only for the internal,
            non-commercial use. The eligibility of the users for the access of
            the Content would be decided by Aiproff and its licensors. You may
            not modify the Content, remove any copyright notices, or create
            derivative works without our prior written consent. Unauthorised use
            of these exclusive services terminates the licence granted herein.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">
            <h1 className="lg:text-4xl text-3xl font-bold">4. User Postings</h1>
          </h1>
          <p>
            When you post information on the AiProff.ai website, including in
            forums, message boards, or surveys, you grant AiProff.ai a
            worldwide, non-exclusive, transferable, sublicensable, fully
            paid-up, royalty-free, perpetual, irrevocable licence to use,
            reproduce, publish, distribute, and modify such information for any
            purpose and in any form or media not prohibited by applicable law.
            You agree not to post materials that are unlawful, threatening,
            libellous, defamatory, obscene, infringe intellectual property
            rights, contain viruses, or violate these Terms.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">
            <h1 className="lg:text-4xl text-3xl font-bold">
              5. Notices of Infringement
            </h1>
          </h1>
          <p>
            AiProff.ai prohibits the posting of content that infringes
            intellectual property rights. If you believe your intellectual
            property rights have been infringed on our website, please contact
            our team on our contact page and provide all the necessary
            information as outlined in Section 5 of these Terms.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">6. Disclaimers</h1>
          <p>
            The Content and functionality visible on the AiProff.ai website are
            provided for both Informational Content (IC) and Commercial Content
            (CC). IC contains the Content that is publicly available, while CC
            contains the Content that is available to AiProff’s partners and
            clients. The informational Content may not necessarily constitute
            professional advice or services. AiProff.ai makes no warranties,
            express or implied, about the accuracy or adequacy of these
            informational Content. However, the commercial Content does have
            provision of warranty,warranties, express or implied, about the
            accuracy or adequacy. Your reliance on the Content is at your sole
            risk.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">7. Indemnification</h1>
          <p>
            You agree to indemnify and hold AiProff.ai and its affiliates
            harmless from any liability, expenses, costs, or losses incurred as
            a result of your use of the website and any breach of these Terms.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">
            <h1 className="lg:text-4xl text-3xl font-bold">
              8. Third-party Websites & Providers
            </h1>
          </h1>
          <p>
            AiProff.ai may provide links to third-party websites and may
            incorporate third-party content into its website. AiProff.ai has no
            responsibility for these third-party websites and content, which are
            governed by their respective terms of use and privacy policies.
          </p>
          <h1 className="lg:text-4xl text-3xl font-bold">
            9. Governing Law and Jurisdiction
          </h1>
          <p>
            These Terms are governed by the laws of Gurugram, Haryana, India
            without regard to conflicts of laws principles. Any disputes arising
            from or related to these Terms will be subject to the exclusive
            jurisdiction of the courts in Gurugram.
          </p>

          <h1 className="lg:text-4xl text-3xl font-bold">10. Communication</h1>
          <p>
            Thank you for visiting AiProff.ai and for your understanding and
            compliance with these Terms of Use.
          </p>
          <p>
            If you have any questions or concerns, please contact us at
            support@aiproff.ai or fill the contact us form at
            <span>
              <a href="/contact" className="text-blue-600">
                {' '}
                https://www.aiproff.com/contact-us/{' '}
              </a>
            </span>
          </p>
          <div>
            {' '}
            <div className="text-xl font-bold mb-4">More details about AiProff:</div>
            <div>Company Name - AiProff Software Consulting Pvt. Ltd</div>
            <div>Location - Gurugram, Haryana, India</div>
            <div>Phone Number - +918076774495</div>
            <div>Email Address - support@aiproff.ai</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Legal;
