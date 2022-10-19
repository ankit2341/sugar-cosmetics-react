import HotDeals from "./HotDeals";
import TitleForall from "./TitleForall";

const topicksdata = [
  "https://d32baadbbpueqt.cloudfront.net/Homepage/fd062254-fcc7-432d-94dc-9d7da4a6fc62.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/9f9d2095-f019-4bb5-b961-db87fab439f6.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/c325cb7a-0c27-454d-a631-1e184b071e55.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg",
];
export default function Toppicks() {
  return (
    <>
      <TitleForall titlename={"TOP PICKS OF WEEK"} />
      <HotDeals DataCard={topicksdata} />
    </>
  );
}
