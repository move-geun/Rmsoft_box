import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Block RMSoft</title>
        <meta name="description" content="Image Block RMSoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainContainer">
        <div className="bigBox pink">
          <div className="smallBox white"></div>
        </div>
        <div className="bigBox rela">
          <div className="smallBox absol rightDown skyblue"></div>
        </div>
        <div className="bigBox"></div>
        <div className="bigBox yellow"></div>
        <div className="bigBox absol center zSec green">
          <div className="smallBox absol left zFirst red"></div>
          <div className="smallBox absol down zFirst gray"></div>
        </div>
        <div className="smallBox absol rightUp zFirst blue"></div>
        <div className="smallBox absol leftDown zFirst white"></div>
      </div>
      <style jsx>{`
        .mainContainer {
          position: relative;
          width: 600px;
          height: 600px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
        }
        .bigBox,
        .smallBox {
          outline: 3px solid black;
        }
        .bigBox {
          width: 300px;
          height: 300px;
          background-color: black;
        }
        .smallBox {
          width: 150px;
          height: 150px;
        }

        /* box position */
        .rela {
          position: relative;
        }
        .absol {
          position: absolute;
        }

        /* box location */
        .center {
          top: 50%;
          left: 50%;
          transform: translate(-49%, -49%);
        }
        .rightDown {
          top: 50%;
          left: 50%;
        }
        .rightUp {
          left: 75%;
          top: 25%;
          transform: translate(-50%, -50%);
        }
        .leftDown {
          left: 25%;
          top: 75%;
          transform: translate(-50%, -50%);
        }
        .left {
          top: 50%;
          transform: translate(0, -50%);
        }
        .down {
          left: 50%;
          top: 50%;
          transform: translate(-50%, 0);
        }

        /* z-index */
        .zFirst {
          z-index: 3;
        }
        .zSec {
          z-index: 2;
        }

        /* color */
        .green {
          background-color: #00ff00;
        }
        .white {
          background: #ffffff;
        }
        .yellow {
          background-color: #ffff00;
        }
        .blue {
          background-color: #0000ff;
        }
        .red {
          background-color: #ff0000;
        }
        .pink {
          background-color: #ff00ff;
        }
        .skyblue {
          background-color: #00ffff;
        }
        .gray {
          background-color: #f0f0f0;
        }
      `}</style>
    </>
  );
}
