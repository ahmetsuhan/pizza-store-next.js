import React from "react";

const AboutPage = ({ pageInfo }) => {
  const { aboutPageTitle, pageText, store, chef } = pageInfo[0];

  if (!pageInfo || pageInfo.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="title_page">
        <h1>About Us</h1>
      </div>

      <div className="content_wrapper">
        <div className="inner">
          <h2>{aboutPageTitle}</h2>
          <p>{pageText}</p>
        </div>

        <div className="middle">
          <div className="inner-middle">
            <div className="item two_c">
              <div className="wrapp">
                <div
                  className="top"
                  style={{ background: `url(${chef.img})` }}
                ></div>

                <div className="bottom">
                  <h2>{chef.title}</h2>
                  <h3>{chef.name}</h3>
                  <br />
                  <p>{chef.text}</p>
                </div>
              </div>
            </div>
            <div className="item two_c">
              <div className="wrapp">
                <div
                  className="top"
                  style={{ background: `url(${store.img})` }}
                ></div>

                <div className="bottom">
                  <h2>{store.title}</h2>
                  <h3>{store.name}</h3>
                  <br />
                  <p>{store.text}</p>
                  <div>
                    <span className="bold">Phone:</span> {store.phone}
                  </div>
                  <div>
                    <span className="bold">Address:</span> {store.address}
                  </div>
                  <div>
                    <span className="bold">Email:</span> {store.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3004/aboutPageInfo", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const resData = await res.json();

  return {
    props: {
      pageInfo: resData,
    },
  };
}

export default AboutPage;
