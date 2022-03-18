import Link from 'next/link';
import { useEffect, useState } from 'react';

const PageHeader = ({ title }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => setEmail("mailto:rmiddenway@gmail.com"), 500);
  }, []);

  return (
    <>
      <div className="header-container">
        <Link href="/" passHref>
          <h1 className="heading heading__page clickable">
            Roger <br />
            Middenway
          </h1>
        </Link>
        <div>
          <h2 className="subheading subheading__page">{title}</h2>
          <div className="header-links-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rogermiddenway/"
              passHref
            >
              <span>LinkedIn</span>
            </a>
            <a href={email} passHref>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
