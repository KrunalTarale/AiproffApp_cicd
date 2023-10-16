import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import image from '../assets/Article1/logo.png';
import './PrivacyPolicy.css';
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div className="Legal">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xl mx-auto space-y-12  p-8 my-20">
        <h1 className="lg:text-5xl text-4xl font-bold">AiProff.ai Privacy Policy</h1>
        <div className="lg:text-xl text-lg space-y-12">
          <p>
          Effective Date: April 1, 2022; 
          </p>
          <div className="flex items-center justify-center">
            <img src={image} className="max-h-[25rem]" />
          </div>

          <p>
          AiProff.ai and its subsidiaries and affiliates ("AiProff.ai," "us," or "we") respect your privacy and are committed to protecting your personal data. 
          </p>
          <p>
          This Privacy Policy explains how we collect, use, and safeguard your personal data in connection with our business activities, including our website, applications, and services. 
          </p>
          <p>
          Please take a moment to read this Privacy Policy to understand how we handle your personal data. By using our services or interacting with our website, you consent to the practices described in this Privacy Policy.
          </p>
          <p>
          If you do not agree with these Terms, please refrain from using our website and services. For any other assistance, reach out to our concerned team as highlighted in the section 9 of this Privacy Policy page.
          </p>

          <div>
            <h2 className="lg:text-4xl text-3xl font-bold mb-3">1. Information We Collect</h2>
            <p className='mb-2'>AiProff.ai collects personal data when you interact with our website, services, and applications. The information we collect may include:</p>
            <ul className="list">
              <li>Personal information you provide, such as your name, mailing address, email address, telephone and number.</li>
              <li>Automatically collected information, including your IP address, device identifier, web browser, and browsing information through cookies and similar technologies.</li>
              <li>Information about how you use our website and services, such as your search queries and viewed content.</li>
            </ul>
            <p>We may also obtain personal data from third parties, such as data brokers or aggregators, to enhance our services and conduct data analytics, provided such data sources comply with applicable laws.</p>
          </div>
          
          <div>
            <h2 className="lg:text-4xl text-3xl font-bold mb-3">2. Use of Information</h2>
            <p className='mb-2'>We use your personal data for various purposes, including but not limited to:</p>
            <ul className="list">
              <li>Fulfilling your requests for information.</li>
              <li>Processing your registrations for conferences and events.</li>
              <li>Personalising content you view on our website.</li>
              <li>Improving our services and website.</li>
              <li>Distributing newsletters and alerts.</li>
              <li>Analysing website performance.</li>
              <li>Preventing fraud and enforcing our terms of use.</li>
              <li>Complying with legal obligations and corporate reporting requirements.</li>
              <li>Accomplishing other purposes you initiate or request.</li>
            </ul>
            <p>We may also use cookies and similar tracking technologies to manage our website and services, as well as collect analytics about how you use them. Please refer to our Cookie Preference for more details on our use of cookies.</p>
          </div>

          <div>
            <h2 className="lg:text-4xl text-3xl font-bold mb-3">3. Data Retention</h2>
            <p className='mb-2'>We retain personal data for as long as necessary for the purposes outlined in this Privacy Policy, including for legal and compliance purposes. If you request deletion of your personal data, we will make reasonable efforts to delete it, subject to any legal or regulatory obligations. For any such queries,  please contact us at support@aiproff.ai.</p>
          </div>

          <div>
            <h2 className="lg:text-4xl text-3xl font-bold mb-3">4. Disclosure of Personal Data</h2>
            <p className='mb-2'>We may share your personal data with third parties in certain circumstances, including:</p>
            <ul>
              <li>Service providers that assist us in delivering our services.</li>
              <li>Law enforcement or government authorities when required by law.</li>
              <li>To protect our rights, property, and safety.</li>
              <li>In the event of a business reorganisation, merger, sale, or transfer.</li>
            </ul>
          </div>

          <div>
            <h2 className="lg:text-2xl text-4xl font-bold mb-3">Your Rights</h2>

            <h3 className="lg:text-4xl text-3xl font-bold mb-3">4. GDPR Compliance:</h3>

            <p className='mb-2'>If you are a resident of the European Union (EU), you have certain rights under the General Data Protection Regulation (GDPR) that AiProff.ai respects and is committed to upholding:</p>
            <ul className="list">
              <li><b>Right to Access:</b> You have the right to request access to the personal data we have collected about you. This allows you to review and verify the accuracy of your personal data.</li>
              <li><b>Right to Rectify:</b> If you believe that the personal data we hold about you is inaccurate or incomplete, you have the right to request correction or rectification of this data.</li>
              <li><b>Right to Erasure (Right to Be Forgotten):</b> In certain circumstances, you have the right to request the deletion of your personal data. This is not an absolute right and depends on specific legal grounds.</li>
              <li><b>Right to Restrict Processing:</b> You can request that we limit the processing of your personal data under certain conditions. This might be relevant, for example, if you contest the accuracy of your data.</li>
              <li><b>Right to Data Portability:</b> You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and you can transmit this data to another data controller.</li>
              <li><b>Right to Object:</b> You can object to the processing of your personal data, especially when we process it based on our legitimate interests or for direct marketing purposes.</li>
            </ul>
            <p>To exercise any of these rights under GDPR or if you have questions regarding your personal data, please contact us using the contact information provided in the section 9 "Contact Us" section of this Privacy Policy. We will make reasonable attempts to respond to your requests as required by applicable law.</p>
          </div>

          <div>

            <h3 className="lg:text-4xl text-3xl font-bold mb-3">5. California State Regulations:</h3>

            <p className='mb-2'>If you are a California resident, you have specific rights under California privacy laws, including:</p>
            <ul className="list">
              <li><b>Right to Know:</b> You have the right to request information about the personal data that AiProff.ai has collected about you, including categories of data, sources, and purposes.</li>
              <li><b>Right to Delete:</b> You can request the deletion of your personal data held by AiProff.ai, subject to certain exceptions.</li>
              <li><b>Right to Opt-Out of Sale:</b> If AiProff.ai sells personal data, you have the right to opt-out of this sale.</li>
              <li><b>Right to Non-Discrimination:</b> AiProff.ai will not discriminate against you for exercising your privacy rights.</li>
            </ul>
            <p>To exercise any of these rights under GDPR or if you have questions regarding your personal data, please contact us using the contact information provided in the section 9 "Contact Us" section of this Privacy Policy. We will make reasonable attempts to respond to your requests as required by applicable law.</p>
          </div>

          <div>

            <h3 className="lg:text-4xl text-3xl font-bold mb-3">6. Security</h3>

            <p className='mb-3'>AiProff.ai takes data security seriously and has implemented industry-standard security measures to protect your personal data from loss, unauthorised access, misuse, or alteration. However, it's important to note that while we strive to protect your personal data, no method of data transmission over the internet or storage is entirely secure.</p>
            
            <p className='mb-3'>Our security measures include access controls, encryption, and regular security assessments to safeguard your information. Our personnel and third-party service providers are required to treat your data as confidential.</p>

            <p className='mb-3'>We are committed to maintaining the security of your data and continuously improving our security practices. If you have any concerns about data security or suspect any unauthorised access or misuse of your data, please contact us immediately using the contact information provided in the section 9 "Contact Us" section of this Privacy Policy.</p>

            <p className='mb-3'>Your privacy and data security are important to us, and we are dedicated to ensuring that your personal data is handled with the utmost care and in accordance with applicable data protection laws and regulations.</p>
          </div>

          <div>
            <h3 className="lg:text-4xl text-3xl font-bold mb-3">7. Children</h3>
            <p className='mb-3'>Our website and services are not intended for children under 12 years of age, and we do not knowingly collect personal data from individuals under this age.</p>
          </div>

          <div>
            <h3 className="lg:text-4xl text-3xl font-bold mb-3">8. Changes to Privacy Policy</h3>
            <p className='mb-3'>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes either through email or by prominently posting the updated Privacy Policy on our website.</p>
          </div>

          <div>
            <h3 className="lg:text-4xl text-3xl font-bold mb-3">9. Contact Us</h3>
            <p className='mb-3'>If you have any questions or concerns, please contact us at support@aiproff.ai or fill the contact us form at <Link to={'/contact'} className='links'> https://www.aiproff.com/contactus/ </Link>.</p>

            <p className='mb-3'>More details about AiProff:</p>
            <p className='mb-2'>Company Name:  AiProff Software Consulting Pvt. Ltd</p>
            <p className='mb-2'>Location:  Gurugram, Haryana, India</p>
            <p className='mb-2'>Phone Number:  +918076774495</p>
            <p className='mb-4'>Email Address:  support@aiproff.ai</p>
            
            <p>Thank you for trusting AiProff.ai with your personal data and for reviewing our Privacy Policy.</p>
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
