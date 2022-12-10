import TitleForall from "./TitleForall";

export default function ShukarSugar() {
  return (
    <>
      <TitleForall titlename={"SHUKR HAI,SUGAR HAI"} />
      <div className="youtube_vid">
        <iframe
          width="100%"
          style={{ borderRadius: "10px" }}
          height="450px"
          src="https://www.youtube.com/embed/ZNPEgRIEkBY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
