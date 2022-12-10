import { useNavigate } from "react-router-dom";
import TitleForall from "./HomePage/TitleForall";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";

export default function Footer() {
  const [footer_input, setfooter_input] = useState("");

  return (
    <>
      <div
        style={{
          marginBottom: "0px",
          textAlign: "left",
          height: "40px",
          paddingLeft: "50px",
          paddingTop: "20px",
          background:
            "url(https://in.sugarcosmetics.com/desc-images/Rectangle_background.svg)",
        }}
      >
        <a
          style={{ textDecoration: "none", color: "#212121" }}
          href="https://www.google.com/search?q=sugar+cosmetics+&rlz=1C1NMEO_enIN1000IN1000&sxsrf=ALiCzsZZ0rszGELi5SXoAFm5WiPjMrufuQ%3A1666943136306&ei=oIhbY4ekEvaQseMP7be6oAs&ved=0ahUKEwiH9P-Lt4L7AhV2SGwGHe2bDrQQ4dUDCA8&uact=5&oq=sugar+cosmetics+&gs_lp=Egdnd3Mtd2l6uAED-AEBMgQQIxgnMgQQIxgnMgQQIxgnMggQABiABBixAzIFEAAYgAQyCBAAGIAEGLEDMgsQLhiABBjHARivATIIEAAYgAQYsQMyCBAAGIAEGMkDMgUQABiABMICChAAGEcY1gQYsAOQBgdItA5Q9wpY9wpwAngByAEAkAEAmAGOAaABjgGqAQMwLjHiAwQgTRgB4gMEIEEYAOIDBCBGGACIBgE&sclient=gws-wiz"
        >
          READ MORE ABOUT SUGAR COSMETICS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            width="20"
            height="18"
            viewBox="0 0 384 512"
          >
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg>
        </a>
      </div>
      <div
        style={{
          background:
            "url(https://in.sugarcosmetics.com/desc-images/Rectangle_background.svg)",
          marginTop: "0px",
        }}
      >
        <TitleForall titlename={"LET'S STAY IN TOUCH"} />
        <p>
          Get the latest beauty tips straight to your inbox. Can’t wait to
          connect!
        </p>
        <div style={{ width: "50%", margin: "auto", borderRadius: "40px" }}>
          <input
            style={{ width: "80%", height: "40px", paddingLeft: "10px" }}
            type="email"
            value={footer_input}
            placeholder="Enter Email"
            onChange={(e) => {
              setfooter_input(e.target.value);
            }}
          />
          <button
            style={{
              color: "#fff",
              width: "20%",
              height: "40px",
              backgroundColor: "#000",
            }}
            onClick={() => {
              footer_input != ""
                ? swal({
                    buttons: false,
                    title: "Hurray! ",
                    text: "We will let you know offers you should not miss",
                    icon: "success",
                  })
                : swal({
                    buttons: false,
                    text: "Please enter E-mail field can't be empty!",
                    icon: "info",
                  });
            }}
          >
            SUBSCRIBE
          </button>
        </div>
        <img
          style={{ width: "100%" }}
          src="https://i.postimg.cc/BvYqLLJG/scfooterimg.jpg"
          alt=""
        />

        <div style={{ width: "100%", backgroundColor: "#000" }}>
          <div className="footersvg">
            <a href="https://www.facebook.com/trySUGAR/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a href="https://twitter.com/trySUGAR?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width="30"
                height="30"
                viewBox="0 0 448 512"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width="30"
                height="30"
                viewBox="0 0 576 512"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a href="https://www.pinterest.com/sugarcosmetics/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width="30"
                height="30"
                viewBox="0 0 496 512"
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
            </a>
            <a href="https://www.pinterest.com/sugarcosmetics/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width="30"
                height="30"
                viewBox="0 0 496 512"
              >
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/trysugar/?hl=en">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                width="30"
                height="30"
                viewBox="0 0 448 512"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
              </svg>
            </a>
          </div>
        </div>

        <img
          className="footer_img"
          style={{ width: "100%" }}
          src="https://i.postimg.cc/fWBqXc9F/scfooterimg2.jpg"
          alt=""
        />
      </div>
    </>
  );
}
